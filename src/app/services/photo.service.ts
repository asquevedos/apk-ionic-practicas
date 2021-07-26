import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  direccion: string;
  constructor() { }

  public async addNewToGallery()  {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
      saveToGallery: true
    });



    this.direccion = capturedPhoto.webPath;

  }
}
