import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MybookPage } from '../mybook/mybook';
import { NewbookPage } from '../newbook/newbook';
import { BookinfoPage } from '../bookinfo/bookinfo';

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {
  myBook: any;
  newBook: any;
  bookInfo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myBook = MybookPage;
    this.newBook = NewbookPage;
    this.bookInfo = BookinfoPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

}
