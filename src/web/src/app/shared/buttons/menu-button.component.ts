import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [],
  template: `
      <button
      class="px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
      [attr.type]="type"
      (click)="handleClick($event)"
    >
      <ng-content></ng-content>
    </button>
`,
})
export class MenuButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() buttonClick = new EventEmitter<Event>();

  handleClick(event: Event): void {
    this.buttonClick.emit(event);
  }

}
