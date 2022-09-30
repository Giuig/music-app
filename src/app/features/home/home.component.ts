import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../core/services/api.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  topTracksSubscription: Subscription | undefined;
  topTracks: any;

  ngOnInit(): void {
  }

  getTopTracks() {
    this.topTracksSubscription = this.apiService.getTopTracks().subscribe(observer => {
      this.topTracks = {...observer};
      console.log(this.topTracks)
      },
      () => {},
    )
  }
}
