using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Server.Services;

namespace Server.Hubs;

/// <summary>
/// Hub for all SignalR events for the game.
/// </summary>
[Authorize]
public class GameHub(IGameService gameService) : Hub<IGameHubClient>
{
    private Guid UserIdentifier =>
    Guid.Parse(
        Context.UserIdentifier ?? throw new InvalidOperationException("User not signed in")
    );


    public override Task OnConnectedAsync()
    {
        return base.OnConnectedAsync();
    }
    
    public override Task OnDisconnectedAsync(Exception? exception)
    {
        return base.OnDisconnectedAsync(exception);
    }

    /// <summary>
    /// Add the player to the SignalR group and join the Room.
    /// </summary>
    /// <param name="roomId"></param>
    /// <returns></returns>
    public async Task JoinRoom(string roomId)
    {
        Console.WriteLine($"Join room, {UserIdentifier}  room: {roomId}");

        await Groups.AddToGroupAsync(Context.ConnectionId, roomId);

        await gameService.JoinRoom(roomId, UserIdentifier);
    }
}

