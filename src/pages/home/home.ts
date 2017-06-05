import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NetworkService } from '../../providers/network-service';
import { AlertController, Platform } from 'ionic-angular';

declare const networkinterface;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public networkService: NetworkService,
    public alertCtrl: AlertController,
    public platform: Platform,
    public _ngZone : NgZone
    )
  {
    //...
  }

  wifiIp: string  = '0.0.0.0';
  cellIp : string = '0.0.0.0';

  public refreshIp()
  {
    console.log('refreshIP clicked');
		try 
		{
			// networkinterface.getWiFiIPAddress((ip) => 
			// {
			// 	console.log('getWiFiIPAddress ip', ip);
			// 	this._ngZone.run(() => 
      //   {
			// 		this.wifiIp = ip;
			// 	});
			// });

      if(networkinterface == null || networkinterface == undefined)
        console.log('network interface is either null or undefined !!!');

			networkinterface.getIPAddress((ip) => 
			{
				console.log('getCarrierIPAddress ip', ip);
				this._ngZone.run(() => 
        {
					this.cellIp = ip;
				});
			}, (error) =>
      {
        console.log('AN ERROR OCCURED !');
        console.log(error);
      });
		}
    catch (e) 
    {
			console.error("ERROR : " + e);
			this.wifiIp = "error, check logs";
      this.cellIp = 'error, check logs';
    }
  }
  
  public whenDevice_Ready()
  {
    this.platform.ready().then(() => 
    {
      this.refreshIp();
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