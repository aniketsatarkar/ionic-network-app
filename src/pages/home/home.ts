import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NetworkService } from '../../providers/network-service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public networkService: NetworkService,
    public alertCtrl: AlertController
    ) 
  {
    //...
  }

  private showNetworkType()
  {
    this.networkService.getNetworkType().then(type => 
    {
      let alert = this.alertCtrl.create(
        {
          title: 'Network Type',
          message: <string>type,
          buttons: ['Ok']
        });

        alert.present();
    });
  }

}// end of class.