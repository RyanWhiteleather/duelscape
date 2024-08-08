import { Routes } from '@angular/router';
import { MainMenuComponent } from './features/main-menu/main-menu.component';
import { RoomComponent } from './features/room/room.component';

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: ':roomId', component: RoomComponent },
  // { path: 'characters', component: CharactersComponent }
];
