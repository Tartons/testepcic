import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { ListPage } from '../list/list';
import { MetodogamaespectometricoPage } from '../metodogamaespectometrico/metodogamaespectometrico';
import { MetodogeotermicoPage } from '../metodogeotermico/metodogeotermico';
import { ListradiometricosPage } from '../listradiometricos/listradiometricos';
import { SettingsPage } from '../settings/settings';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  
  goToTestPage() {
    this.navCtrl.push(TestPage);
  } 
  goToListPage() {
    this.navCtrl.push(ListPage);
  }
  goToMetodogamaespectometricoPage() {
    this.navCtrl.push(MetodogamaespectometricoPage);
  }
  goToMetodogeotermicoPage() {
    this.navCtrl.push(MetodogamaespectometricoPage);
  }
  goToListradiometricosPage() {
    this.navCtrl.push(ListradiometricosPage);
  }
  goToSettingsPage() {
    this.navCtrl.push(SettingsPage);
  }
}