namespace Server.Models.Dtos
{
    /// <summary>
    /// Contains information about the state of the lobby
    /// </summary>
    public class LobbyStateDto
    {
        /// <summary>
        /// All the player connections associated with this lobby
        /// </summary>
        public List<ConnectionDto> Connections { get; set; }
        
        public bool GameStarted { get; set; }

        public LobbyStateDto(List<GameParticipant> connections, bool gameStarted)
        {
            Connections = connections.Select(c => new ConnectionDto(c)).ToList();
            GameStarted = gameStarted;
        }
    }
}
