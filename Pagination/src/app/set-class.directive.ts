import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appSetClass]'
})
export class SetClassDirective {
  @Input('appSetClass') set ClassNames(objects: any) {
    for (let key in objects) {
      console.log('key : ' + key); //class = disabled
      console.log('value :' + objects[key]);//true | false
      if (objects[key]) {
        this.elementRef.nativeElement.classList.add(key);
      } else {
        this.elementRef.nativeElement.classList.remove(key);
      }
    }
  }

  constructor(private elementRef: ElementRef) {
  }

}
