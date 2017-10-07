import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating-info',
  templateUrl: './rating-info.component.html',
  styleUrls: ['./rating-info.component.css']
})
export class RatingInfoComponent implements OnInit, OnChanges {

  @Input()
  count: number;

  info: string;

  constructor() {
    this.info = 'info';
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    switch (this.count) {
      case 1:
        this.info = `low rating`;
        break;
      case 2:
        this.info = `average rating`;
        break;
      case 3:
        this.info = `moderate rating`;
        break;
      case 4:
        this.info = `great rating`;
        break;
      case 5:
        this.info = `Excellent rating`;
        break;

      default:
        break;
    }
  }
}
