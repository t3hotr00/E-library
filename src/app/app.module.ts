import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { PdfPage } from '../pages/pdf/pdf';
import { RegisterPage } from '../pages/register/register';
import { MybookPage } from '../pages/mybook/mybook';
import { NewbookPage } from '../pages/newbook/newbook';
import { BookinfoPage } from '../pages/bookinfo/bookinfo';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { ProfileProvider } from '../providers/profile/profile';


 const firebaseAuth = {

 apiKey: "AIzaSyCwz6DVoDmwtvcylLI5Z-WFGiVTYqpt85E",
    authDomain: "e-library-65616.firebaseapp.com",
    databaseURL: "https://e-library-65616.firebaseio.com",
    projectId: "e-library-65616",
    storageBucket: "e-library-65616.appspot.com",
    messagingSenderId: "1066858660335"
  };

@NgModule({

  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    MybookPage,
    NewbookPage,
    BookinfoPage,
    MyprofilePage,
    PdfPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    MybookPage,
    NewbookPage,
    BookinfoPage,
    MyprofilePage,
    PdfPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfileProvider
  ]
})
export class AppModule {}
