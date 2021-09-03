import { Project } from './../../interfaces/project.interface';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
          transition: 'width 1s',
        }),
        { params: { widthVal: 0 } }
      ),
      transition('* => expanded', [animate('{{time}}s ease-in-out')], {
        params: { time: 1 },
      }),
    ]),
  ],
})
export class ProjectComponent implements OnInit {
  @Input() project: Project | undefined;
  @Input() reverse: boolean | undefined;

  @ViewChild('front', { read: ElementRef, static: false }) front:
    | ElementRef
    | undefined;
  @ViewChild('back', { read: ElementRef, static: false }) back:
    | ElementRef
    | undefined;

  expand: boolean = false;

  icons = {
    faGithub,
    faLink,
  };

  constructor() {}

  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event'])
  private scroll() {
    if (this.isInView()) {
      this.expand = true;
    }
  }

  isInView(): boolean {
    if (this.front) {
      const rect = this.front.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      if (topShown && bottomShown) return true;
      return false;
    }
    return false;
  }
}
