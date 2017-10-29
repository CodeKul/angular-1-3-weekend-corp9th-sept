import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[resizer]'
})
export class ResizerDirective {

  @HostBinding('style.width')
  @Input()
  txtWd: string;

  @HostListener(`mouseenter`)
  onIn() {
    //this.rend.setStyle(this.elRf.nativeElement, 'width', '300px');
    this.txtWd = '300px';
  }

  @HostListener('mouseleave')
  onOut() {
    //this.rend.setStyle(this.elRf.nativeElement, 'width', '100px');
    this.txtWd = '100px';
  }

  @HostListener('keyup.enter')
  onKey(ev: any) {
    console.log(ev);
  }

  constructor(
    private elRf: ElementRef,
    private rend: Renderer2
  ) {
    //this.elRf.nativeElement.style.border = '1px solid red';
    this.rend.setStyle(this.elRf.nativeElement, 'border', '1px solid red');
  }
}
