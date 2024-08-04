using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Server.Models.Dtos
{
    /// <summary>
    /// Contains information about the state of the lobby
    /// </summary>
    public class LobbyStateDto(List<GamePlayers> connections, bool gameStarted)
    {
        /// <summary>
        /// All the player connections associated with this lobby
        /// </summary>
        public List<ConnectionDto> GamePlayers { get; set; } = connections.Select(c => new ConnectionDto(c)).ToList();

        public bool GameStarted { get; set; } = gameStarted;
    }
}
