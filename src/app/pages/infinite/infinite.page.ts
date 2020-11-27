import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  data: any[] = Array(0);
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
    this.loadData(null);
  }
  loadData(event) {
    setTimeout(() => {
      if (this.data.length > 100) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
      }
      else{
        const nuevoArr = Array(20);
        this.data.push(...nuevoArr);
        this.infiniteScroll.complete();
      }
    }, 500);
  }
}
