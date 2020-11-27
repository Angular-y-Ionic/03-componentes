import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  @ViewChild(IonReorderGroup) reorder: IonReorderGroup;
  public personajes: string[] = ['Superman', 'Flash', 'Spiderman', 'Batman', 'Acuaman'];
  public moteverItems: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  doReorder(event: any) {
    event.detail.complete();

    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);

    console.log(this.personajes);
  }
  onClick() {
    this.moteverItems = !this.moteverItems;
    this.reorder.disabled = !this.moteverItems;
  }
}