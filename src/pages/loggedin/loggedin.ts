import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MybookPage } from '../mybook/mybook';
import { NewbookPage } from '../newbook/newbook';
import { BookinfoPage } from '../bookinfo/bookinfo';
import { MyprofilePage } from '../myprofile/myprofile';

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

  myBook() {
    this.navCtrl.push ( MybookPage );
  }
  newBook() {
    this.navCtrl.push  ( NewbookPage );
  }
  bookInfo() {
    this.navCtrl.push ( BookinfoPage );
  }
  myProfile() {
    this.navCtrl.push ( MyprofilePage );
  }
}
