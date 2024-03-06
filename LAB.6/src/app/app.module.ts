import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumPhotosComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'home', component: HomeComponent},
      {path : 'about', component: AboutComponent},
      {path : 'albums', component: AlbumsComponent},
      {path : 'albums/:albumId', component : AlbumDetailComponent},
      {path : 'albums/:albumId/photos/:photoId', component : AlbumPhotosComponent}, //photoId is always 0 cuz there's always 1 photo for each album
      {path : '', redirectTo : 'home', pathMatch : "full"},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
