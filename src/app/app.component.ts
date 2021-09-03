import { PROJECTS } from './data/projects';
import { Project } from './interfaces/project.interface';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'portfolio-PolSust';

  projects: Project[] = PROJECTS;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {}
}
