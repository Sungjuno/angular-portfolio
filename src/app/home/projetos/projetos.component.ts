import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
  animations:[trigger('fadeIn',[
    transition(':enter',[
      style({
        opacity: 0,
      }),
      animate('.3s ease-in', style({opcity:1}))
    ])
  ])]
})
export class ProjetosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
