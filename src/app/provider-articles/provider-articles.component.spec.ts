import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderArticlesComponent } from './provider-articles.component';

describe('ProviderArticlesComponent', () => {
  let component: ProviderArticlesComponent;
  let fixture: ComponentFixture<ProviderArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderArticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
