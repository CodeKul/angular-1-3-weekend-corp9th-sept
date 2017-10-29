import { Directive, ViewContainerRef, TemplateRef, Input, OnChanges } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[unless]'
})
export class UnlessDirective implements OnChanges {

  @Input('unless')
  isSh: boolean;

  constructor(
    private vcRef: ViewContainerRef,
    private temRef: TemplateRef<any>
  ) { }

  ngOnChanges() {
    if (!this.isSh) {
      this.vcRef.createEmbeddedView(this.temRef);
    } else {
      this.vcRef.clear();
    }
  }
}
