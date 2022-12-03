import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[orange]',
})
export class CustomStyleDirective {
  constructor(private el: ElementRef) {
    // el.nativeElement.style.color = 'red';
    el.nativeElement.classList.add('dynamic');
  }
}
