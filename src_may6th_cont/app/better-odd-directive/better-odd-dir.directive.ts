import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterOddDir]'
})
export class BetterOddDirDirective implements OnInit {

  @HostBinding("style.backgroundColor") bgColor = "transparent";

  constructor(private element : ElementRef, private render : Renderer2) { 

  }
  ngOnInit(){
      this.render.setStyle(this.element.nativeElement,"backgroundColor","yellow");
  }


  @HostListener("mouseover") onMouseOver(eventdata : Event){
   // this.render.setStyle(this.element.nativeElement,"backgroundColor","blue");
   this.bgColor = "blue";
  }

  @HostListener("mouseleave") onmouseleave(eventdata : Event){
    //this.render.setStyle(this.element.nativeElement,"backgroundColor","transparent");
    this.bgColor = "transparent";
  }
}
