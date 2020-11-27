import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {
  @ViewChild(IonList) ionlist: IonList;
  usuarios: Observable<any>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();
  }
  favorite(item: any) {
    console.log(item);
    this.ionlist.closeSlidingItems();
  }
  share(item: any) {
    console.log(item);
    this.ionlist.closeSlidingItems();
  }
  dalete(item: any) {
    console.log("eliminado: " + item.name);
    this.ionlist.closeSlidingItems();
  }
}
