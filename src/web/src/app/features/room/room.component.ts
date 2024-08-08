import { Component, OnDestroy, OnInit } from '@angular/core';
import { HubConnection, HubConnectionState, HubConnectionBuilder, HttpTransportType, LogLevel } from '@microsoft/signalr';
import { v4 as uuid } from 'uuid';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LobbyBaseComponent } from '../lobby/lobby-base/lobby-base.component';
import { GameState } from '../game/models/game-state.interface';


@Component({
  selector: 'app-room',
  standalone: true,
  imports: [LobbyBaseComponent, CommonModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit, OnDestroy {
  persistentId: string;
  roomId: string = '';
  connection: HubConnection | undefined;
  connectionError: string | undefined;
  gameState: GameState | undefined;

  constructor(private route: ActivatedRoute) {
    this.persistentId = localStorage.getItem('persistentId') ?? uuid();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const roomIdParam = params.get('roomId')
      this.roomId = roomIdParam ? roomIdParam : '';
      if (this.roomId && this.persistentId) {
        if (this.connection?.state === HubConnectionState.Connected) {
          this.connection?.stop();
        }
        this.createConnection();
      }
    });
  }

  ngOnDestroy() {
    this.connection?.off('UpdateGameState', this.updateGameState);
    this.connection?.stop();
  }

  createConnection() {
    const hubUrl = `${environment.apiUrl}/server`;
    console.log('connecting to: ', hubUrl);

    const signalRConnection = new HubConnectionBuilder()
      .withUrl(hubUrl, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
        accessTokenFactory: () => this.persistentId,
      })
      .configureLogging(LogLevel.Information)
      .build();

    signalRConnection
      .start()
      .then(() => {
        this.connection = signalRConnection;
        this.connectionStatusUpdated();
      })
      .catch((e) => {
        console.log(e);
        this.connectionError = 'Could not connect to the server';
      });
  }

  connectionStatusUpdated() {
    if (!this.connection) return;

    switch (this.connection.state) {
      case HubConnectionState.Connected:
        this.connection.onclose((error) => {
          if (error) {
            this.connectionStatusUpdated();
            this.connection = undefined;
            this.createConnection();
          } else {
            this.connection?.off('UpdateGameState', this.updateGameState);
          }
        });
        this.connection.on('UpdateGameState', this.updateGameState.bind(this));
        this.joinRoom();
        break;
      case HubConnectionState.Disconnected:
        this.connection.off('UpdateGameState', this.updateGameState.bind(this));
        break;
      default:
        break;
    }
  }

  joinRoom() {
    if (this.roomId) {
      this.connection?.invoke('JoinRoom', this.roomId);
    }
  }

  updateGameState(updatedGameState: GameState) {
    this.gameState = { ...updatedGameState };
    console.log(this.gameState);
  }

  // Placeholder method for getting the room ID
  useRoomId(): string {
    // Implement your logic to get the room ID
    return 'some-room-id';
  }
}
