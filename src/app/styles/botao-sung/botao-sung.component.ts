import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-botao-sung',
  templateUrl: './botao-sung.component.html',
  styleUrls: ['./botao-sung.component.css']
})
export class BotaoSungComponent implements OnInit {

  mostraArrow: boolean = false;

  constructor() {
   }

  ngOnInit(): void {
  }

  faArrowLeft = faArrowLeft;
}
