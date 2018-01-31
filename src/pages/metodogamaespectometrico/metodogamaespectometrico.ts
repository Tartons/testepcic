import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MetodogamaespectometricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-metodogamaespectometrico',
  templateUrl: 'metodogamaespectometrico.html',
})
export class MetodogamaespectometricoPage {
  selectedItem: any;
  icons: string[];
  title: string[];
  items: Array<{ title: string, icon: string, note: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['folder', 'folder', 'folder'];
    this.title = ['x', ' x1', ' x2']

    this.items = [];
      for (let i = 1 ; i < 4; ++i) {
        this.items.push({
          icon: this.icons[i],
          title: this.title[i],
          note: 'Método - ' +i 
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

//  ionViewDidLoad() {
//    console.log('ionViewDidLoad MetodogamaespectometricoPage');
//  }

//}
