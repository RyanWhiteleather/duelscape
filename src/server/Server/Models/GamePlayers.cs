using Server.Database;

namespace Server.Models
{
    /// <summary>
    /// Model to hold player information that are currently in a game.
    /// 
    /// For information about the Players saved in the database see <see cref=PlayerDao/> 
    /// </summary>
    public class GamePlayers
    {
        public Guid PersistentPlayerId;
        public string Name;
        public int PlayerIndex;

        /// <summary>
        /// Represents the character this player is going to use.
        /// TODO: Character should probably be its own class.
        /// </summary>
        public string Character;

        public int TeamNumber;
        
    }
}
