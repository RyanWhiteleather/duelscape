namespace Server.Services
{
    public interface IGameService
    {
        /// <summary>
        /// Joins a player to a room.
        /// </summary>
        /// <param name="roomId"></param>
        /// <param name="persistentPlayerId"></param>
        /// <returns></returns>
        public Task JoinRoom(string roomId, Guid persistentPlayerId);
    }
}
