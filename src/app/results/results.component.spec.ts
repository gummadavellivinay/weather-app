import { TestBed } from '@angular/core/testing';
import { ResultsComponent } from './results.component';
describe('ResultsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ResultsComponent
      ],
    }).compileComponents();
  });

  it('should create the Component', () => {
    const fixture = TestBed.createComponent(ResultsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
