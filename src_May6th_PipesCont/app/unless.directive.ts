import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
/*
<summary>
this strucutral directive is responsinble for act as opposite way of *ngIf directive.
</summary>
*/
export class UnlessDirective {

  @Input() set appUnless(condtion : boolean){

    if(!condtion){
        // Apply / show it on the DOM
        this.placeholder.createEmbeddedView(this.templateRef);
    }else{
        // don't show it to the DOM
        this.placeholder.clear();
    }
  }
  constructor(private templateRef : TemplateRef<any>, private placeholder : ViewContainerRef ) { }

}
