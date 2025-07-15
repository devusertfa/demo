import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  @Input() color = 'red';
  constructor(private elementRef: ElementRef) {
    setTimeout(() => {
      this.elementRef.nativeElement.style.backgroundColor = this.color;
    }, 100);
  }
}
