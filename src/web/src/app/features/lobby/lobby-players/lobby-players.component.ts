import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../players/models/player.interface';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lobby-players',
  standalone: true,
  imports: [MatCheckboxModule, CommonModule],
  templateUrl: './lobby-players.component.html',
  styleUrl: './lobby-players.component.css'
})
export class LobbyPlayersComponent implements OnInit {
  @Input() players: Player[] = [];
  sortedPlayers: Player[] = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void { }

  getTeamName(team: number): string {
    switch (team) {
      case 1:
        return 'Team 1';
      case 2:
        return 'Team 2';
      default:
        return '';
    }
  }

  getCharacterAvatar(character: string): string {
    switch (character) {
      case 'ObiWan':
        return 'assets/character-avatars/Obi-Wan.png';
      case 'MaceWindu':
        return 'assets/character-avatars/Mace-Windu.png';
      case 'Vader':
        return 'assets/character-avatars/Vader.png';
      case 'Emporer':
        return 'assets/character-avatars/Emperor.png';
      default:
        return '';
    }
  }

  sortPlayers(): void {
    this.sortedPlayers = [...this.players].sort((a, b) => a.teamNumber - b.teamNumber);
  }
}
