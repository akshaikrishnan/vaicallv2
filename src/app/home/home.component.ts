import { Component, NgZone, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  variable:any;
  constructor(private ngZone: NgZone) {
    window.onresize = (e) => {
      //ngZone.run will help to run change detection
      this.ngZone.run(() => {
        console.log('Width: ' + window.innerWidth);
        console.log('Height: ' + window.innerHeight);
      });
    };
  }

  ngOnInit(): void {
    this.variable=environment.TEST;
  }
}
