import { Component } from '@angular/core';
import { ComponentFixture, waitForAsync, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MicrofrontLoaderDirective } from './microfront-loader.directive';
@Component({
  template: `
    <div
    appMicrofrontLoaderDirective="chp-member-header"
    [inputs]="memberHeaderInput"
    ></div>
  `
})
class TestComponent {
  memberHeaderInput = new Map<string, string>([
    ['appName', 'Operational Dashboard']
  ]);
}
describe('LoaderDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directive: MicrofrontLoaderDirective;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MicrofrontLoaderDirective, TestComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    directive = fixture.debugElement.query(By.css('div')).nativeElement;
  });

  it('should show chp-header component after init', fakeAsync(() => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    tick(100);
    const headerInstance: HTMLElement = debugEl.querySelector('chp-member-header');
    expect(headerInstance).not.toBeUndefined();
  }));
});
