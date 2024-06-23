using Microsoft.AspNetCore.SignalR;

namespace Server.Hubs;

/// <summary>
/// Hub for all SignalR events for the game.
/// </summary>
public class GameHub : Hub
{
    public override Task OnConnectedAsync()
    {
        return base.OnConnectedAsync();
    }
    
    public override Task OnDisconnectedAsync(Exception? exception)
    {
        return base.OnDisconnectedAsync(exception);
    }
}

