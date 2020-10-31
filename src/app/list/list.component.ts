import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  beers: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getBeers().subscribe(data => {
      this.beers = data;
      console.log(this.beers);
    });
  }

}
