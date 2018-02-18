import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookinforPage } from './bookinfor';

@NgModule({
  declarations: [
    BookinforPage,
  ],
  imports: [
    IonicPageModule.forChild(BookinforPage),
  ],
})
export class BookinforPageModule {}
