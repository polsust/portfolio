import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  faHtml5,
  faCss3,
  faBootstrap,
  faJsSquare,
  faAngular,
  faPhp,
  faNodeJs,
  faWordpress,
  faSass,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.sass'],
})
export class CompetencesComponent {
  @ViewChild('frontEnd', { read: ElementRef, static: false }) frontEnd:
    | ElementRef
    | undefined;
  @ViewChild('card', { read: ElementRef, static: false }) card:
    | ElementRef
    | undefined;

  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faBootstrap = faBootstrap;
  faJsSquare = faJsSquare;
  faAngular = faAngular;
  faPhp = faPhp;
  faNodeJs = faNodeJs;
  faWordpress = faWordpress;
  faSass = faSass;

  canFlip = false;
  backHidden = true;
  frontHidden = false;
  private transitionHasEnded: boolean = true;
  private isHovering = false;
  private autoFlipTimeout = 50000;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.updateHeight();

    setInterval(() => {
      this.autoFlip();
    }, this.autoFlipTimeout);
  }

  @HostListener('window:resize')
  onResize() {
    this.updateHeight();
  }

  mouseEnter() {
    this.isHovering = true;

    this.autoFlipTimeout = 0;
  }
  mouseLeave() {
    this.isHovering = false;
  }

  cardFlip(side: string) {
    if (!this.transitionHasEnded) return;
    this.transitionHasEnded = false;

    this.canFlip = !this.canFlip;

    this.updateHeight();

    let duration = 500;
    if (side === 'back') {
      setTimeout(() => {
        this.frontHidden = false;
        this.backHidden = true;
      }, duration);
    } else if (side === 'front') {
      setTimeout(() => {
        this.backHidden = false;
        this.frontHidden = true;
      }, duration);
    }
  }
  transitionEnd(evt: any) {
    if (evt.target !== evt.currentTarget) return;
    this.transitionHasEnded = true;
  }

  private updateHeight() {
    let frontHeight = this.frontEnd?.nativeElement.offsetHeight;

    frontHeight += 200;

    this.renderer.setStyle(
      this.card?.nativeElement,
      'height',
      frontHeight + 'px'
    );
  }
  autoFlip() {
    if (this.isHovering) return;

    let side = this.frontHidden ? 'back' : 'front';
    this.cardFlip(side);
  }
}
