import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyPlayersComponent } from './lobby-players.component';

describe('LobbyPlayersComponent', () => {
  let component: LobbyPlayersComponent;
  let fixture: ComponentFixture<LobbyPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LobbyPlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LobbyPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
