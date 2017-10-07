import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  @Input()
  heartColor: string;

  @Output()
  heartClick: EventEmitter<number>;

  constructor() {
    this.heartClick = new EventEmitter();
  }

  ngOnInit() {
  }

  onHeartClick(num: number) {
    console.log(num);
    this.heartClick.emit(num);
    this.heartColor = this.randomColor();
    console.log(this.heartColor);

  }

  randomColor(): string {
    let red = Math.round(Math.random() * 256);
    let green = Math.round(Math.random() * 256);
    let blue = Math.round(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  }
}
