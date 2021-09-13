import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkmode = 'light';
  title = 'vaicall';

  constructor(overlayContainer: OverlayContainer) {
    //localStorage.setItem('isDarkmode', JSON.stringify('light'));
    this.isDarkmode = JSON.parse(localStorage.getItem('isDarkmode') || '{}');
    if (this.isDarkmode == 'dark') {
      overlayContainer.getContainerElement().classList.add('dark-theme');
      console.log(this.isDarkmode);
    }
  }

  darkmode() {}
}
