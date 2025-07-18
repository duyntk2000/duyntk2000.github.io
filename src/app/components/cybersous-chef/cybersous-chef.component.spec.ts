import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybersousChefComponent } from './cybersous-chef.component';

describe('CybersousChefComponent', () => {
  let component: CybersousChefComponent;
  let fixture: ComponentFixture<CybersousChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CybersousChefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CybersousChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
