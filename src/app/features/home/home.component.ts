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
  searchParam: any;
  artistSearchResultsSubscription: Subscription | undefined;
  artistSearchResults: any;
  albumSearchResultsSubscription: Subscription | undefined;
  albumSearchResults: any;
  trackSearchResultsSubscription: Subscription | undefined;
  trackSearchResults: any;

  ngOnInit(): void {
  }

  getTopTracks() {
    this.topTracksSubscription = this.apiService.getTopTracks().subscribe(observer => {
        this.topTracks = {...observer};
        console.log(this.topTracks)
      },
      () => {
      },
    )
  }

  getArtistSearch(search: string) {
    this.artistSearchResultsSubscription = this.apiService.getArtistSearch(search).subscribe(observer => {
        this.artistSearchResults = {...observer};
        console.log(this.artistSearchResults)
      },
      () => {
      },
    )
  }

  getAlbumSearch(search: string) {
    this.albumSearchResultsSubscription = this.apiService.getAlbumSearch(search).subscribe(observer => {
        this.albumSearchResults = {...observer};
        console.log(this.albumSearchResults)
      },
      () => {
      },
    )
  }

  getTrackSearch(search: string) {
    this.trackSearchResultsSubscription = this.apiService.getTrackSearch(search).subscribe(observer => {
        this.trackSearchResults = {...observer};
        console.log(this.trackSearchResults)
      },
      () => {
      },
    )
  }

  search($event: KeyboardEvent) {
    // @ts-ignore
    console.log($event.target.value)
    // @ts-ignore
    this.searchParam = $event.target.value;
  }

  getSearch(search: string){
    this.getArtistSearch(search);
    this.getAlbumSearch(search);
    this.getTrackSearch(search);
  }
}
