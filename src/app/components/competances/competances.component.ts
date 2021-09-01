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
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-competances',
  templateUrl: './competances.component.html',
  styleUrls: ['./competances.component.sass'],
})
export class CompetancesComponent implements OnInit {
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

  canFlip = false;
  backHidden = true;
  frontHidden = false;
  private transitionHasEnded: boolean = true;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.updateHeight();
  }
  ngAfterViewInit() {
    this.updateHeight();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateHeight();
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
}
