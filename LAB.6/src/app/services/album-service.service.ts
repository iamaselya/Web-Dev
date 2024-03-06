import { Injectable } from '@angular/core';
import {catchError, Observable, retry, tap} from "rxjs";
import {Album} from "../Album";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AlbumsComponent} from "../albums/albums.component";

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {
  private apiUrl = "http://localhost:5000/albums";
  private item2 : Album = {id: 0, userId: 0, title: "", thumbnailUrl: "", url : ""};
  constructor(private http:HttpClient) { }

  public getAlbums() : Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl).pipe(
      retry(3),
      catchError(err => {throw "can't get details: "+ err}),
      tap(() => {console.log("object received")})
    );
  }

  public deleteItem(id : number): Observable<unknown> {
    //console.log(this.apiUrl+'/'+id.toString());
    return this.http.delete<unknown>(this.apiUrl+'/'+id.toString());
  }

  public saveItem(item : Album, title : string): Observable<unknown> {
    item.title = title;
    return this.http.patch<unknown>(this.apiUrl+'/'+item.id.toString(),item)
  }

  public addItem(userId : number, id : number, title : string, thumbnailUrl : string, url : string) : Observable<unknown> {
    this.item2 = {
      "userId" : userId,
      "id" : id,
      "title": title,
      "thumbnailUrl": thumbnailUrl,
      "url": url
    }
    console.log(this.item2);
    return this.http.post<unknown>(this.apiUrl,this.item2);
  }
}
