import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';

@Injectable()
export class NetworkService {

  constructor(
    // public http: Http,
    public network: Network
    ) 
  {
    //...
  }

  public type: any;

  public getNetworkType()
  {
    // this.network.type.
    return new Promise(resolve => 
    {
      console.log("Network Type : " + this.network.type);
      
      this.type = this.network.type;
      resolve(this.type);
    });
  }

}// end of class.