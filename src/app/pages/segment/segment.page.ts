import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  superHeroes: Observable<any>;
  txtBuscar: string = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getSuperheroes();
  }
  segmentChanged(event) {
    if (event.detail.value === "Todos") {
      this.txtBuscar = '';
    }
    else{
      this.txtBuscar = event.detail.value;
    }
  }
}
