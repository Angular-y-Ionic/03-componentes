import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public albunes: any[] = [];
  txtBuscar: string = "";


  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getAlbums()
      .subscribe(
        albunes => {
            this.albunes = albunes;
        });
  }
  onChange(event) {
    this.txtBuscar = event.detail.value;
  }
}
