import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FogexExampleComponent } from './fogex-example.component';

describe('FogexExampleComponent', () => {
  let component: FogexExampleComponent;
  let fixture: ComponentFixture<FogexExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FogexExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FogexExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
