import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  carNm: string;
  ipTyp = 'text';
  dt: string;

  constructor() {
    this.carNm = 'Mercedes';
  }

  chDt() {
    let dtRw: Date = new Date();
    this.dt = dtRw.toString();
  }
}
