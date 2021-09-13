import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private ngZone: NgZone) {
    window.onresize = (e) => {
      //ngZone.run will help to run change detection
      this.ngZone.run(() => {
        console.log('Width: ' + window.innerWidth);
        console.log('Height: ' + window.innerHeight);
      });
    };
  }

  ngOnInit(): void {}
}
