import { Component, OnInit } from '@angular/core';
import { animate, stagger, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('init',[
      transition(':enter',[
        style({
          opacity: 0,
          transform: 'translateX(-3rem)'
        }),
          animate('.3s'),
          style({
            opacity:1,
            transform: 'none'
          })
        ])
    ]),
    trigger('init1',[
      transition(':enter',[
        style({
          opacity: 0,
          transform: 'translateX(-3rem)'
        }),
          animate('.2s .2s'),
          style({
            opacity:1,
            transform: 'none'
          })
        ])
    ]),
    trigger('init2',[
      transition(':enter',[
        style({
          opacity: 0,
          transform: 'translateX(-3rem)'
        }),
          animate('.2s .4s'),
          style({
            opacity:1,
            transform: 'none'
          })
        ])
    ]),
]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
