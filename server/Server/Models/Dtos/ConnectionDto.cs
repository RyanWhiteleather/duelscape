using Server.Helpers;

namespace Server.Models.Dtos
{
    /// <summary>
    /// Connection information about the player
    /// </summary>
    public class ConnectionDto
    {
        public string PlayerId { get; set; }
        public string Name { get; set; }
        public string Character { get; set; }
        public int TeamNumber { get; set; }

        public ConnectionDto(GamePlayers gamePlayers)
        {
            PlayerId = gamePlayers.PersistentPlayerId.ToString().Hash();
            Name = gamePlayers.Name;
            Character = gamePlayers.Character;
            TeamNumber = gamePlayers.TeamNumber;
        }
    }
}
