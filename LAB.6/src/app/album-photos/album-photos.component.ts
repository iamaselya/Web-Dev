import { Component, OnInit } from '@angular/core';
import {Album} from "../Album";
import {AlbumServiceService} from "../services/album-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  currentAlbum : Album | undefined;
  constructor(private route : ActivatedRoute, private albumService : AlbumServiceService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('albumId'));

    this.albumService.getAlbums().subscribe((albums : Album[]) => this.currentAlbum = albums.find(album => album.id === albumIdFromRoute));
  }

}
