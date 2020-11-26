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
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}