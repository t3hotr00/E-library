import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewbooksPage } from './newbooks';

@NgModule({
  declarations: [
    NewbooksPage,
  ],
  imports: [
    IonicPageModule.forChild(NewbooksPage),
  ],
})
export class NewbooksPageModule {}
