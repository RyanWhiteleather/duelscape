using Server.Models.Records;

namespace Server.Models.Dtos
{
    /// <summary>
    /// Player Dto for a player in a Lobby or Game
    /// </summary>
    public class PlayerDto
    {
        public string IdHash { get; init; }
        public string Name { get; init; } = "";

        public PlayerDto(Player player, string playerId)
        {
            IdHash = playerId;
            Name = player.Name;
        }
    }
}
