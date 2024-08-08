import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-button',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <mat-icon (click)="handleClick()" class="absolute text-white cursor-pointer">home</mat-icon>
  `,
})
export class HomeButtonComponent {
  @Output() click = new EventEmitter<void>();

  handleClick() {
    this.click.emit();
  }
}
