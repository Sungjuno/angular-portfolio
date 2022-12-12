import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations:[trigger('fadeIn',[
    transition(':enter',[
      style({
        opacity: 0,
      }),
      animate('.3s ease-in', style({opcity:1}))
    ])
  ])]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
