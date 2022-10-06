import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchParam: any;
  artistSearchResultsSubscription: Subscription | undefined;
  artistSearchResults: any;
  albumSearchResultsSubscription: Subscription | undefined;
  albumSearchResults: any;
  trackSearchResultsSubscription: Subscription | undefined;
  trackSearchResults: any;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(obs => {
      if (obs['param']) {
        this.searchParam = obs['param']
        this.getSearch(this.searchParam);
      }
    })
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
