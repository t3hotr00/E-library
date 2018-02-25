import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';

/**
 * Generated class for the PdfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pdf',
  templateUrl: 'pdf.html',
})
export class PdfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfPage');
  }
   signOut() {
    this.navCtrl.setRoot ( HomePage );

}
}
