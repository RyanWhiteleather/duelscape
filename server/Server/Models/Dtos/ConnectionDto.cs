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

        public ConnectionDto(GameParticipant gameParticipant)
        {
            PlayerId = gameParticipant.PersistentPlayerId.ToString().Hash();
            Name = gameParticipant.Name;
        }
    }
}
