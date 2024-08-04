namespace Server.Models
{
    /// <summary>
    /// Room where players will join the lobby and where the game will actually take palce.
    /// </summary>
    public class Room
    {
        public List<GamePlayers> Connections { get; set; } = new();
        public string RoomId { get; set; }
        
        public bool GameStarted { get; set; }
    }
}
