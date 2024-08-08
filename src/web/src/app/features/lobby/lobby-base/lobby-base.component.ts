import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubConnection } from '@microsoft/signalr';
import { CommonModule } from '@angular/common';
import { GameState } from '../../game/models/game-state.interface';
import { LobbyData } from '../models/lobby-data.interface';
import { MenuHeaderComponent } from "../../../shared/menu-header/menu-header.component";
import { MenuButtonComponent } from '../../../shared/buttons/menu-button.component';
import { LobbyGameSettingsComponent } from "../lobby-game-settings/lobby-game-settings.component";
import { LobbyPlayersComponent } from "../lobby-players/lobby-players.component";

@Component({
  selector: 'app-lobby-base',
  standalone: true,
  templateUrl: './lobby-base.component.html',
  imports: [CommonModule, MenuHeaderComponent, MenuButtonComponent, LobbyGameSettingsComponent, LobbyPlayersComponent]
})
export class LobbyBaseComponent implements OnInit, OnDestroy {
  @Input() roomId!: string;
  @Input() connection: HubConnection | undefined;
  @Input() playerId!: string;
  @Input() gameState: GameState | undefined;
  @Input() onBack: () => void = () => { };
  @Input() connectionError: string | undefined;

  lobbyData: LobbyData | undefined;
  inLobby: boolean = false;

  ngOnInit() {
    if (!this.connection) {
      return;
    }
    this.connection.on('UpdateLobbyState', this.updateLobbyData.bind(this));
  }

  ngOnDestroy() {
    if (this.connection) {
      this.connection.off('UpdateLobbyState', this.updateLobbyData.bind(this));
    }
  }

  updateLobbyData(updatedLobby: LobbyData) {
    console.log(updatedLobby);
    this.lobbyData = updatedLobby;
    this.inLobby = updatedLobby !== null;
  }

  startGame() {
    throw new Error('Method not implemented.');
  }
  quitGame() {
    throw new Error('Method not implemented.');
  }
}
