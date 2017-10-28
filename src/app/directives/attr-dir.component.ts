import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-dir',
  templateUrl: './attr-dir.component.html',
  styleUrls: ['./attr-dir.component.css']
})
export class AttrDirComponent implements OnInit {

  st = {
    border: '1px solid red',
    'background-color': 'red'
  };
  constructor() { }

  ngOnInit() {
  }

}
