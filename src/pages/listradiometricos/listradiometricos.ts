import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ListradiometricosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listradiometricos',
  templateUrl: 'listradiometricos.html',
})
export class ListradiometricosPage {
  selectedItem: any;
  icons: string[];
  title: string[];
  items: Array<{ icon: string, title: string, note: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  // If we navigated to this page, we will have an item available as a nav param
  this.selectedItem = navParams.get('item');

  // Let's populate this page with some filler content for funzies
  this.icons = ['folder', 'folder', 'folder','folder'];
  this.title = ['x', ' não sei 1', 'não sei 2']

  this.items = [];
    for (let i = 1 ; i < 2; ++i) {
      this.items.push({
        icon: this.icons[i],
        title: this.title[i],
        note: +i 
      });
    }
  }


  itemTapped(event, item) {
  // That's right, we're pushing to ourselves!
  this.navCtrl.push(HomePage, {
    item: item
  });
  }
}
