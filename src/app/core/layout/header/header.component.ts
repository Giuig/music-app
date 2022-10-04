import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  searchParam: any;
  artistSearchResultsSubscription: Subscription | undefined;
  artistSearchResults: any;
  albumSearchResultsSubscription: Subscription | undefined;
  albumSearchResults: any;
  trackSearchResultsSubscription: Subscription | undefined;
  trackSearchResults: any;

  ngOnInit(): void {
  }

  search($event: KeyboardEvent) {
    // @ts-ignore
    console.log($event.target.value)
    // @ts-ignore
    this.searchParam = $event.target.value;
  }

  getArtistSearch(search: string) {
    this.artistSearchResultsSubscription = this.apiService.getArtistSearch(search).subscribe(observer => {
        this.artistSearchResults = {...observer};
        console.log(this.artistSearchResults);
      },
      () => {
      },
    )
  }

  getAlbumSearch(search: string) {
    this.albumSearchResultsSubscription = this.apiService.getAlbumSearch(search).subscribe(observer => {
        this.albumSearchResults = {...observer};
        console.log(this.albumSearchResults);
      },
      () => {
      },
    )
  }

  getTrackSearch(search: string) {
    this.trackSearchResultsSubscription = this.apiService.getTrackSearch(search).subscribe(observer => {
        this.trackSearchResults = {...observer};
        console.log(this.trackSearchResults);
      },
      () => {
      },
    )
  }

  getSearch(search: string){
    this.getArtistSearch(search);
    this.getAlbumSearch(search);
    this.getTrackSearch(search);
  }

}
