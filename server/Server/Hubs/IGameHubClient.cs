using Server.Models.Dtos;

namespace Server.Hubs;

public interface IGameHubClient
{
    public Task UpdateGameState(GameStateDto gameStateDto);
    public Task UpdateLobbyState(LobbyStateDto lobbyStateDto);
    public Task ErrorMessage(string message);
}