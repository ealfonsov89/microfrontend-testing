import { Directive, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { timer } from 'rxjs';


@Directive({
  selector: '[appMicrofrontLoaderDirective]'
})
export class MicrofrontLoaderDirective implements OnInit {
  @Input() appMicrofrontLoaderDirective: string;
  @Input() inputs: Map<string, any>;
  @Input() outputs: Map<string, (...arg: any) => any>;
  constructor(private readonly el: ElementRef<HTMLElement>) {
  }
  ngOnInit(): void {
    this.show();
  }
  private show() {
    const loaderComponentInstance = document.createElement(this.appMicrofrontLoaderDirective);
    this.el.nativeElement.append(loaderComponentInstance);
    timer(0).subscribe(() => {
      for (const [key, input] of this.inputs) {
        document.querySelector(this.appMicrofrontLoaderDirective)[key] = input;
      }
    });
  }
}
