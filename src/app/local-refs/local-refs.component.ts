import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-local-refs',
  templateUrl: './local-refs.component.html',
  styleUrls: ['./local-refs.component.css']
})
export class LocalRefsComponent implements OnInit {

  img = 'https://assets.pcmag.com/media/images/520527-yuneec-typhoon-h.jpg?thumb=y';

  @ViewChild('imgNm')
  imgNm: ElementRef;

  constructor() { }

  ngOnInit() {
    this.imgNm.nativeElement.style.border = '1px solid red';// dont do this
  }

  changeImage(img: string) {
    switch (img) {
      case 'mobile':
        this.img = 'https://cdn.shopclues.com/images/thumbnails/71182/320/320/119090911102011644312B1ofVSeL14930321801494934552.jpg';
        break;
      case 'computer':
        this.img = 'https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/desktop_full_view_alt.jpg';
        break;
      case 'laptop':
        this.img = 'https://www.windowscentral.com/sites/wpcentral.com/files/field/image/2017/01/largepng.png';
        break;
      case 'drone':
        this.img = 'https://assets.pcmag.com/media/images/520527-yuneec-typhoon-h.jpg?thumb=y';
        break;
      default:
        this.img = 'https://auto.ndtvimg.com/car-images/medium/mercedes-amg/glc-43-coupe/mercedes-amg-glc-43-coupe.jpg?v=5';
        break;
    }
  }
}
