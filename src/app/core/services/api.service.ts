import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "https://ws.audioscrobbler.com"
  API_KEY_LASTFM = "dfb6f837358c6046fe38ef728941bf25";

  constructor(private httpClient: HttpClient) {}

  getTopTracks(){
    return this.httpClient.get(this.baseUrl + "/2.0/?method=chart.gettoptracks&api_key=" + this.API_KEY_LASTFM +"&format=json")
  }
}
