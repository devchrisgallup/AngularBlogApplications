import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';


describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // this is the test
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // test for value
  it('title should say Welcome', () => {
    expect(component.title).toEqual('Welcome'); 
  });
  // test for render of value
  it('should render the title', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toEqual('Welcome'); 
  });
  // 
  it('should add 15 to input', () => {
    expect(component.add15(30)).toBeGreaterThan(40);
  });
});
