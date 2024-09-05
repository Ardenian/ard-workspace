import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdLibraryComponent } from './ard-library.component';

describe('ArdLibraryComponent', () => {
  let component: ArdLibraryComponent;
  let fixture: ComponentFixture<ArdLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArdLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArdLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
