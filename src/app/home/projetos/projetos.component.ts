import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
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
export class ProjetosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
