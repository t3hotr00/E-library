import { Component } from '@angular/core';
import {IonicPage, NavController, LoadingController } from 'ionic-angular';
//1. import firebase for storgar puprpose and make sure you npm installl and add module
import * as firebase from 'firebase';
// 2. Add @ionic-native/camera add for pointing camera resources of phone and npm install and add to modules
import { Camera, CameraOptions } from '@ionic-native/camera';
// 3 . Add refernce to image on html and click button



@IonicPage()
@Component({
  selector: 'page-newbook',
  templateUrl: 'newbook.html',
})
export class NewbookPage {
  someTextUrl;
  selectedPhoto;
  loading;
  currentImage;
  constructor(public navCtrl: NavController,public camera: Camera, public loadingCtrl: LoadingController) {
  }

  grabPicture() {

    const options: CameraOptions = {
      quality: 100,
      targetHeight: 200,
      targetWidth: 200,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      this.loading.present();

      this.selectedPhoto  = this.dataURItoBlob('data:image/jpeg;base64,' + imageData);

      this.upload();
    }, (err) => {
      console.log('error', err);
    });
  }

  dataURItoBlob(dataURI) {

    let binary = atob(dataURI.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  };

  upload() {
    if (this.selectedPhoto) {
      var uploadTask = firebase.storage().ref().child('images/uploaded.png').put(this.selectedPhoto);
      uploadTask.then(this.onSuccess, this.onError);
    }
  }

    onSuccess = (snapshot) => {
    this.currentImage = snapshot.downloadURL;
    this.loading.dismiss();
  }

  onError = (error) => {
    console.log('error', error);
    this.loading.dismiss();
  }
}
