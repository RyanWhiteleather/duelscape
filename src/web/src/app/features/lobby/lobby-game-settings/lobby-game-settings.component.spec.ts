import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyGameSettingsComponent } from './lobby-game-settings.component';

describe('LobbyGameSettingsComponent', () => {
  let component: LobbyGameSettingsComponent;
  let fixture: ComponentFixture<LobbyGameSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LobbyGameSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LobbyGameSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
