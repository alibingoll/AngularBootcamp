import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = "https://jsonplaceholder.typicode.com/photos";
  constructor(private httpClient: HttpClient) { }

  getPhotos():Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(this.apiUrl);
  }
}
