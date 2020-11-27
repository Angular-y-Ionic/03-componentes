import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string,
  name: string,
  redirectTo: string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public components: Componente[] = [
    {
      icon:'game-controller-outline',
      name:'Action sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon:'skull-outline',
      name:'Alert',
      redirectTo: '/alert' 
    },
    {
      icon:'person-circle-sharp',
      name:'Avatar',
      redirectTo: '/avatar' 
    },
    {
      icon:'boat-sharp',
      name:'Botones',
      redirectTo: '/button' 
    },
    {
      icon:'card-outline',
      name:'Cards',
      redirectTo: '/card' 
    },
    {
      icon:'checkmark-done-outline',
      name:'Check',
      redirectTo: '/check' 
    },
    {
      icon:'calendar-outline',
      name:'Date Time',
      redirectTo: '/date-time' 
    },
    {
      icon:'add-circle-outline',
      name:'Fab',
      redirectTo: '/fab' 
    },
    {
      icon:'grid-outline',
      name:'Grid',
      redirectTo: '/grid' 
    },
    {
      icon:'infinite-outline',
      name:'Infinite-Scroll',
      redirectTo: '/infinite' 
    },
    {
      icon:'hammer-outline',
      name:'Inputs',
      redirectTo: '/input' 
    },
    {
      icon:'list-outline',
      name:'List - sliding',
      redirectTo: '/list' 
    },
    {
      icon:'reorder-three-outline',
      name:'List - reorder',
      redirectTo: '/list-reorder' 
    },
    {
      icon:'refresh',
      name:'Loading',
      redirectTo: '/loading' 
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}