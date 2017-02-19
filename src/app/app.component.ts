import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
})

export class AppComponent {


  constructor(private service: AppService) {

  }



}


