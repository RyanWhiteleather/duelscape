import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyBaseComponent } from './lobby-base.component';

describe('BaseLobbyComponent', () => {
  let component: LobbyBaseComponent;
  let fixture: ComponentFixture<LobbyBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LobbyBaseComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LobbyBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
