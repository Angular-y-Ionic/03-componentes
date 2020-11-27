import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  data:Array<number> = new Array<number>();
  constructor() { 
    for (let index = 0; index < 100; index++) {
      this.data.push(index);
    }
  }
  ngOnInit() {
  }

}
