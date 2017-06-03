import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NetworkService } from '../../providers/network-service';
import { AlertController } from 'ionic-angular';

declare let networkinterface: any;

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
      this.showAlert('Network Type', <string>type);
    });

    this.getIp();
  }

  private getIp()
  {
    networkinterface.getIPAddress((ip) =>  
    { 
      this.showAlert('IP Address', <string>ip);
    });
  }

  private showAlert(title: string, message: string, show:boolean = true)
  {
    let alert = this.alertCtrl.create(
      {
        title: title,
        message: message,
        buttons: ['Ok']
      });
      alert.present();
  }

}// end of class.