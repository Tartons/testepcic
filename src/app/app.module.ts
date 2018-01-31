import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TestPage } from '../pages/test/test';
import { MetodogeotermicoPage } from '../pages/metodogeotermico/metodogeotermico';
import { MetodogamaespectometricoPage } from '../pages/metodogamaespectometrico/metodogamaespectometrico';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListradiometricosPage } from '../pages/listradiometricos/listradiometricos';
import { SettingsPage } from '../pages/settings/settings'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TestPage,
    MetodogeotermicoPage,
    MetodogamaespectometricoPage,
    ListradiometricosPage,
    SettingsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TestPage,
    MetodogeotermicoPage,
    MetodogamaespectometricoPage,
    ListradiometricosPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
