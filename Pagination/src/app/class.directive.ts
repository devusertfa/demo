import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
    selector: '[appClass]',
})
export class ClassDirective {
    @Input('appClass') set backgroundColor(color: string) {
        this.elementRef.nativeElement.style.backgroundColor = color;
    }

    constructor(private elementRef: ElementRef) {

    }
}
