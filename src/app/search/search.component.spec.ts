import { TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
describe('SearchComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SearchComponent
      ],
    }).compileComponents();
  });

  it('should create the Component', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
