import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  loading: HTMLIonLoadingElement;


  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  onClick() {
    this.presentLoading();
    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando espere...',
    });
    await this.loading.present();
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }
}
