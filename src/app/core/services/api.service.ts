import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "https://ws.audioscrobbler.com/2.0/"
  API_KEY_LASTFM = "dfb6f837358c6046fe38ef728941bf25";

  constructor(private httpClient: HttpClient) {}

  getTopTracks(){
    return this.httpClient.get(this.baseUrl + '?method=chart.gettoptracks&api_key=' + this.API_KEY_LASTFM + '&format=json');
  }

  getArtistSearch(search: string){
    return this.httpClient.get(this.baseUrl + '?method=artist.search&artist=' + search + '&api_key=' + this.API_KEY_LASTFM + '&format=json');
  }

  getAlbumSearch(search:string){
    return this.httpClient.get(this.baseUrl + '?method=album.search&album=' + search + '&api_key=' + this.API_KEY_LASTFM + '&format=json')
  }

  getTrackSearch(search:string){
    return this.httpClient.get(this.baseUrl + '?method=track.search&track=' + search + '&api_key=' + this.API_KEY_LASTFM + '&format=json')
  }
}
