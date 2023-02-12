import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePosterComponent } from './title-poster.component';

describe('TitlePosterComponent', () => {
  let component: TitlePosterComponent;
  let fixture: ComponentFixture<TitlePosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TitlePosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
