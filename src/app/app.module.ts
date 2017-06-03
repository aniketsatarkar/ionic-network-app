import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Network } from '@ionic-native/network';
import { NetworkService  } from '../providers/network-service';

// import { HttpModule, RequestOptions, XHRBackend, Http } from '@angular/http';
// import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    // {
    //   provide: Http,
    //     useFactory: 
    //     (
    //       backend: XHRBackend, defaultOptions: RequestOptions
    //     ) => new Http(backend, defaultOptions),
    //   deps: [XHRBackend, RequestOptions]
    // },
    StatusBar,
    SplashScreen,
    NetworkService,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}