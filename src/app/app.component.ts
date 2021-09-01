import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'porfolio-PolSust';

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {}
}
