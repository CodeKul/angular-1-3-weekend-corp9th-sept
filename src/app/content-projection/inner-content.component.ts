import { Component, OnInit, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-inner-content',
  template: `
    <div class="row">
      <div class="col-md-12">
        <input type="button" class="btn btn-danger" value="Okay">
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class InnerContentComponent implements OnInit {

  @ContentChild('nm')
  nm: ElementRef;
  constructor() { }

  ngOnInit() {
  }

}
