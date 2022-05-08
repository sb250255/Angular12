import { Component, OnInit, Input, ContentChild, ElementRef, OnChanges, SimpleChanges, ViewChild, DoCheck, AfterContentInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy {

  @Input() element : {name:string, content : string, type: string};
  displayPanelBody = true;
  @ContentChild('contentReference') paragraph : ElementRef;
  // @ViewChild('heading') header: ElementRef;
  @ViewChild('header') heading : ElementRef;
  constructor() { }

  ngOnChanges(chnages : SimpleChanges){
        console.log("No Onchnages initiated");
        console.log(chnages);

  }

  ngOnInit() {
    console.log(this.paragraph.nativeElement.textContent);
   
  }

  ngDoCheck(){
    console.log("ng Do check initiated");
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.heading.nativeElement.textContent);
  }

  onHeaderClick(){
    console.log(this.paragraph.nativeElement.textContent);
    this.displayPanelBody = !this.displayPanelBody;
    console.log("header value is :" +this.heading.nativeElement.textContent)
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
