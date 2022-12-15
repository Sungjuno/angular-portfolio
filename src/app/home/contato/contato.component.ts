import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  animations:[
    trigger('fadeIn',[
    transition(':enter',[
      style({
        opacity: 0,
      }),
      animate('.3s ease-in', style({opacity:1}))
    ])
  ])
]
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



}
