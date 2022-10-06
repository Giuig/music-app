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

  ngOnInit(): void {
  }

  search($event: KeyboardEvent) {
    // @ts-ignore
    console.log($event.target.value)
    // @ts-ignore
    this.searchParam = $event.target.value;
  }
}
