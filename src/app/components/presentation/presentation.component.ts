import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.sass'],
})
export class PresentationComponent implements OnInit {
  @ViewChild('figcaption') private figcaption: ElementRef | undefined;
  public alredyAnimated = false;

  isInView(): boolean {
    if (this.figcaption) {
      const rect = this.figcaption.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      if (topShown && bottomShown) {
        setTimeout(() => {
          this.alredyAnimated = true;
        }, 1000);
        return true;
      }
      return false;
    }
    return false;
  }

  constructor() {}

  ngOnInit(): void {}
}
