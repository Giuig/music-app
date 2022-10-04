import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  topTracksSubscription: Subscription | undefined;
  topTracks: any;
  topArtistsSubscription: Subscription | undefined;
  topArtists: any;
  topAlbumByArtistSubscription: any;
  topAlbumByArtist: any;

  ngOnInit(): void {
    this.getTopTracks();
    this.getTopArtists();
  }

  getTopTracks() {
    this.topTracksSubscription = this.apiService.getTopTracks().subscribe(observer => {
        this.topTracks = {...observer};
        console.log(this.topTracks);
      },
      () => {
      },
    )
  }

  getTopArtists() {
    this.topArtistsSubscription = this.apiService.getTopArtists().subscribe(observer => {
        this.topArtists = {...observer};
        console.log(this.topArtists);
      },
      () => {
      },
    )
  }

  getTopAlbumByArtist(artistName: string) {
    this.topAlbumByArtistSubscription = this.apiService.getAlbumSearch(artistName).subscribe(observer => {
        this.topAlbumByArtist = {...observer};
        console.log(this.topAlbumByArtist);
      },
      () => {
      },
    )
  }
}
