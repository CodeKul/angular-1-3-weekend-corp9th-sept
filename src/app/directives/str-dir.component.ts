import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str-dir',
  templateUrl: './str-dir.component.html',
  styleUrls: ['./str-dir.component.css']
})
export class StrDirComponent implements OnInit {

  mobiles = [
    { nm: 'android', pz: 6 },
    { nm: 'iOS', pz: 60 },
    { nm: 'Windows', pz: 15 },
    { nm: 'Nokia', pz: 16 },
    { nm: 'BB', pz: 20 },
  ];

  day = 8;
  constructor() { }

  ngOnInit() {

    //this.mobiles = _sortBy(this.mobiles, 'pz');
    this.mobiles.sort((a, b) => {
      let aPz = a['pz'];
      let bPz = b['pz'];

      return bPz - aPz;
    });

    this.mobiles.forEach(mob => console.log(mob.nm + ' - ' + mob.pz));

    let filtered = this.mobiles.filter(mob => mob.pz >= 15);
    // filtered.forEach(mob => console.log(mob.nm));
  }
}
