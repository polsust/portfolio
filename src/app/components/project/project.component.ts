import { Project } from './../../interfaces/project.interface';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import {
  faGithub,
  faHtml5,
  faCss3,
  faBootstrap,
  faJsSquare,
  faAngular,
  faPhp,
  faNodeJs,
  faWordpress,
  faSass,
  faReact,
  faSymfony,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
  animations: [
    trigger('expand', [
      state(
        'expanded',
        style({
          width: '{{widthVal}}%',
        }),
        { params: { widthVal: 0 } }
      ),
      transition('* => expanded', [animate('{{time}}s ease-in-out')], {
        params: { time: 1 },
      }),
    ]),
    trigger('spin', [
      state(
        'spinning',
        style({
          transform: 'rotate(1800deg)',
        })
      ),
      transition('* => spinning', [animate('1.5s ease-in-out')]),
    ]),
    trigger('grow', [
      state(
        'small',
        style({
          transform: 'scale(0.0001)',
        })
      ),
      state(
        'big',
        style({
          transform: 'scale(1)',
        })
      ),
      transition('small => big', [
        animate('0.5s cubic-bezier(.52,.57,.27,1.55)'),
      ]),
    ]),
    trigger('fadeUp', [
      state(
        'down-invisible',
        style({
          transform: 'translateY(10px)',
          opacity: 0,
        })
      ),
      state(
        'up-visible',
        style({
          transform: 'translateY(0px)',
          opacity: 1,
        })
      ),
      transition('down-invisible => up-visible', [animate('1.5s ease')]),
    ]),
  ],
})
export class ProjectComponent {
  @Input() project: Project | undefined;
  @Input() reverse: boolean | undefined;

  @ViewChild('figure', { read: ElementRef, static: false }) figure:
    | ElementRef
    | undefined;

  animate: boolean = false;
  techIndex: number = 0;

  icons = {
    faGithub,
    faLink,
    faHtml5,
    faCss3,
    faBootstrap,
    faJsSquare,
    faAngular,
    faPhp,
    faNodeJs,
    faWordpress,
    faSass,
    faReact,
    faSymfony,
  };

  constructor() {}

  animationEnd(evt: any) {
    if (evt.toState === 'small') return;
    this.techIndex++;
  }

  @HostListener('window:scroll', ['$event'])
  private scroll() {
    if (this.isInView()) {
      this.animate = true;
    }
  }

  isInView(): boolean {
    if (this.figure) {
      const rect = this.figure.nativeElement.getBoundingClientRect();

      const topShown = rect.top <= window.innerHeight;
      const bottomShown = rect.bottom <= window.innerHeight;

      if (topShown || bottomShown) return true;
      return false;
    }
    return false;
  }
}
