import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Album} from "../Album";
import {ActivatedRoute} from "@angular/router";
import {AlbumServiceService} from "../services/album-service.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  currentAlbum : Album | undefined;
  @Output() deleteEvent = new EventEmitter;
  @Input() album : Album= {"userId": 0, "id" : -1, "title" : ''};
  constructor(private route : ActivatedRoute, private albumService : AlbumServiceService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('albumId'));

    this.albumService.getAlbums().subscribe((albums : Album[]) => this.currentAlbum = albums.find(album => album.id === albumIdFromRoute));

  }

  public deleteItem() {
    this.deleteEvent.emit();
  }

  public saveItem(item : Album, input_ : string) {
    console.log(input_);
    this.albumService.saveItem(item, input_).subscribe();
  }
}
