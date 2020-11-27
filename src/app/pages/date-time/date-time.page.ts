import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  fechaNacimiento: Date = new Date();
  customYearValues = [2025, 2020, 2016, 2008, 2004, 2000, 1996];
  dateCustom: Date = new Date();
  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => {
        this.customYearValues.push(event.year.value);
         this.dateCustom = new Date(event.year.value, event.month.value,event.day.value)
        }
      },
      {
        text: 'Mundo',
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }
  cambioFecha(event) {
    //this.fechaNacimiento = event.detail.value;
    console.log(event.detail.value);
  }
}
