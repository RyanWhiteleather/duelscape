namespace Server.Models
{
    /// <summary>
    /// Model to hold player information
    /// </summary>
    public class GameParticipant
    {
        public Guid PersistentPlayerId;
        public string Name;
        public int PlayerIndex;
        
    }
}
