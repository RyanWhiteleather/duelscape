namespace Server.Models.Records
{
    /// <summary>
    /// Record class to store Player information
    /// </summary>
    public record Player
    {
        public int Id { get; init; }
        public string Name { get; init; } = "";
    }
}
