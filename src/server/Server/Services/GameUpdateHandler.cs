using Microsoft.AspNetCore.SignalR;
using Server.Hubs;
using Server.Models.Dtos;

namespace Server.Services;

public class GameUpdateHandler(IHubContext<GameHub, IGameHubClient> hubContext) : IGameUpdateHandler
{
    /// <summary>
    /// SignalR Hub context for the game
    /// </summary>
    private readonly IHubContext<GameHub, IGameHubClient>  _hubContext = hubContext;

    /// <summary>
    /// Updates information related to the Game
    /// </summary>
    /// <param name="roomId"></param>
    /// <param name="gameStateDto"></param>
    /// <returns></returns>
    /// <exception cref="NotImplementedException"></exception>
    public async  Task HandleGameUpdate(string roomId, GameStateDto gameStateDto)
    {
        await hubContext.Clients.Groups(roomId).UpdateGameState(gameStateDto);
    }

    /// <summary>
    /// Updates information related to the Lobby
    /// </summary>
    /// <param name="roomId"></param>
    /// <param name="lobbyStateDto"></param>
    /// <returns></returns>
    /// <exception cref="NotImplementedException"></exception>
    public async Task HandleLobbyUpdate(string roomId, LobbyStateDto lobbyStateDto)
    {
        await _hubContext.Clients.Groups(roomId).UpdateLobbyState(lobbyStateDto);
    }
}