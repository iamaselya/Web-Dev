import { Component, OnInit } from '@angular/core';
import {AlbumServiceService} from "../services/album-service.service";
import {Album} from "../Album";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public albums : Album[] = [];
  constructor(private albumService : AlbumServiceService) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((albums) => this.albums = albums);
  }

  public deleteItem(id : number) {
    this.albumService.deleteItem(id).subscribe();
  }

  public addItem(userId : string, id : string, title : string, thumbnailUrl : string, url : string) {
    this.albumService.addItem(+userId,+id,title,thumbnailUrl,url).subscribe();
  }

}
