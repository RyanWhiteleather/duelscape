import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-lobby-game-settings',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './lobby-game-settings.component.html',
  styleUrl: './lobby-game-settings.component.css'
})
export class LobbyGameSettingsComponent {
  @Input() roomId!: string;

  constructor(private clipboard: Clipboard) { }

  /**
   * Copy the roomId to the clipboard
   */
  copyRoomId() {
    this.clipboard.copy(this.roomId);
  }
}
