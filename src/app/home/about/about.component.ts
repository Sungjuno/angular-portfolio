import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
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
          transform: 'translateX(-1rem)'
        }),
          animate('.3s'),
          style({
            opacity:1,
            transform: 'none'
          })
        ])
    ])
]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
