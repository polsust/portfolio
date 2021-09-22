import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.sass'],
})
export class IconsComponent implements OnInit {
  @Input()
  icon!: string;

  constructor() {}

  ngOnInit(): void {}
}
