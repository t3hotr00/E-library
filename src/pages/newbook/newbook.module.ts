import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewbookPage } from './newbook';

@NgModule({
  declarations: [
    NewbookPage,
  ],
  imports: [
    IonicPageModule.forChild(NewbookPage),
  ],
})
export class NewbookPageModule {}
