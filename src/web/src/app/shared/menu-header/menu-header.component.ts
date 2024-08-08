import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HomeButtonComponent } from "../buttons/home-button.component";

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [HomeButtonComponent],
  templateUrl: './menu-header.component.html',
  styleUrl: './menu-header.component.css'
})
export class MenuHeaderComponent {
  @Input() children!: string;

  constructor(private router: Router) { }

  navigateHome() {
    this.router.navigate(['/']);
  }
}
