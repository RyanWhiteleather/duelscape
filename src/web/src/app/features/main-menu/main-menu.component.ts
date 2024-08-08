import { Component } from '@angular/core';
import { MenuButtonComponent } from '../../shared/buttons/menu-button.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [MenuButtonComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {
  constructor(private router: Router) { }

  onCreateGame() {
    const roomId = this.generateGameCode();
    this.router.navigate([`/${roomId}`])
    console.log('Create Game clicked');
    // Add your logic here
  }

  onJoinGame() {
    console.log('Join Game clicked');
    // Add your logic here
  }

  onViewCharacters() {
    console.log('View Characters clicked');
    // Add your logic here
  }

  /**
   *Create a random game code used to joing a room
   * @param length - defaults to 6 digits
   * @returns
   */
  private generateGameCode(length: number = 6): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }

}
