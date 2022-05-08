import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector : '[basicDir1]'
})
export class basicDir1 implements OnInit {

    constructor(private elementRef : ElementRef){

    }

    ngOnInit(){
        this.elementRef.nativeElement.style.background = "red";
    }


}