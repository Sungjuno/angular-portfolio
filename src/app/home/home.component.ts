import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[trigger('fadeIn',[
    transition(':enter',[
      style({
        opacity: 0,
      }),
      animate('.3s ease-in', style({opcity:1}))
    ])
  ])]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
