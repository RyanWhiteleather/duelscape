using Server.Database;
using Server.Models;
using System.Collections.Concurrent;
using Server.Models.Dtos;

namespace Server.Services
{
    /// <summary>
    /// Central game service for creating and running a game.
    /// </summary>
    /// <param name="scopeFactory"></param>
    /// <param name="gameUpdateHandler"></param>
    public class GameService(IServiceScopeFactory scopeFactory, IGameUpdateHandler gameUpdateHandler)
        : IGameService
    {

        /// <summary>
        /// key: roomId
        /// value: Room
        /// </summary>
        private readonly ConcurrentDictionary<string, Room> _rooms = new();

        /// <summary>
        /// Joins a player to a room and updates the current lobby.
        /// If the room does not exist it will create one.
        /// </summary>
        /// <param name="roomId"></param>
        /// <param name="persistentPlayerId"></param>
        public async Task JoinRoom(string roomId, Guid persistentPlayerId)
        {

            // Create the room if we don't have one yet
            if (!_rooms.ContainsKey(roomId))
            {
                _rooms.TryAdd(roomId, new Room { RoomId = roomId });
            }

            // Add the connection to the room
            var room = _rooms[roomId];
            if (room.Connections.All(c => c.PersistentPlayerId != persistentPlayerId))
            {
                using var scope = scopeFactory.CreateScope();
                var gameResultContext = scope.ServiceProvider.GetRequiredService<DataContext>();
                var playerDao = await gameResultContext.Players.FindAsync(persistentPlayerId);
                room.Connections.Add(
                    new GameParticipant
                    {
                        Name = playerDao?.Name ?? "Player",
                        PersistentPlayerId = persistentPlayerId,
                    }
                );
            }

            await SendCurrentLobbyState(roomId);
        }

        /// <summary>
        /// Sends and updates the current lobby
        /// </summary>
        /// <param name="roomId"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        private Task SendCurrentLobbyState(string roomId)
        {
            if (!_rooms.TryGetValue(roomId, out var room))
            {
                throw new Exception("Trying to send a game state for a room that does not exist");
            }

            return gameUpdateHandler.HandleLobbyUpdate(roomId, GetLobbyStateDto(room));
        }

        /// <summary>
        /// Gets the current lobby state of the room
        /// </summary>
        /// <param name="room"></param>
        /// <returns></returns>
        private LobbyStateDto GetLobbyStateDto(Room room)
        {
            return new LobbyStateDto(room.Connections.ToList(), room.GameStarted );
        }
    }
}
