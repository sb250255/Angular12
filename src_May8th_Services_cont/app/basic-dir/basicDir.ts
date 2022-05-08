import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector : '[basicDir]'
})
export class basicDir implements OnInit {

    constructor(private elementRef : ElementRef){

    }

    ngOnInit(){
        this.elementRef.nativeElement.style.background = "blue";
    }


}