import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.sass'],
})
export class PresentationComponent {
  @ViewChild('figcaption') private figcaption: ElementRef | undefined;
  public alreadyAnimated = false;

  startTimeout: number = 1000;

  isInView(): boolean {
    if (this.startTimeout > 0) return false;

    if (this.figcaption) {
      const rect = this.figcaption.nativeElement.getBoundingClientRect();
      const topShown = rect.top <= window.innerHeight;
      const bottomShown = rect.bottom <= window.innerHeight;

      if (topShown && bottomShown) {
        setTimeout(() => {
          this.alreadyAnimated = true;
        }, 1000);
        return true;
      }
      return false;
    }
    return false;
  }
  constructor() {
    for (let i = this.startTimeout; i > 0; i--) {
      setTimeout(() => {
        this.startTimeout--;
      }, i);
    }
  }
}
