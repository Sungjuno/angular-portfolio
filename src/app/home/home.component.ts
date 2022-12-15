import { Component, OnInit,  HostListener, ElementRef  } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


const inicio = trigger('init',[
  state('comeco',style({opacity: 0,transform: 'translateX(-3rem)'})),
  state('fim',style({opacity: 1,transform: 'none'})),
  transition('comeco => fim',[animate('1s')]),
])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    // trigger('init',[
    //   state('comeco',style({opacity: 0,transform: 'translateX(-3rem)'})),
    //   state('fim',style({opacity: 1,transform: 'none'})),
    //   transition('comeco => fim',[animate('1s')]),]),
    trigger('init',[
      state('* => void', style({ opacity: 0,transform: 'translateX(-3rem)'})),
      transition(':enter',[style({opacity: 0,transform: 'translateX(-3rem)'}),
          animate('.3s'),style({opacity:1,transform: 'none'})])]),
    trigger('init1',[
      state('* => void', style({ opacity: 0,transform: 'translateX(-3rem)'})),
      transition(':enter',[style({opacity: 0,transform: 'translateX(-3rem)'}),
          animate('.2s .2s'),style({opacity:1,transform: 'none'})])]),
    trigger('init2',[
      state('* => void', style({opacity: 0,transform: 'translateX(-3rem)'})),
      transition(':enter',[style({opacity: 0,transform: 'translateX(-3rem)'}),
          animate('.2s .4s'),style({opacity:1,transform: 'none'})])]),
    trigger('fade', [
      state('active', style({ opacity: .2, transform: 'none'})),
      state('inactive', style({ opacity: 1, transform: 'translateY(-5px)'})),
      state('stop', style({opacity: 0})),
      transition('active <=> inactive', [animate('.7s')])])
]
})
export class HomeComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.nome1 = "SUNG";
    this.nome2 = "JU";
    this.nome3 = "NO";
    this.getHostDimensions();
  }

  mudaTitulo = false
  mostraAviso = false;
  isDisabled = false;

  @HostListener('window:resize',['$event'])
  getHostDimensions(){
    if(window.innerWidth < 480){
      this.mostraAviso = true
    }else{
      this.mostraAviso = false
    }
    return window.innerWidth
  }

  times = 100;
  counter = 0;
  state:string = 'inactive'
  onDone($event:any) {
    // call this function at the end of the previous animation.
    // run it as many time as defined
    if (this.counter < this.times) {
      this.state = this.state === 'active' ? 'inactive' : 'active';
      this.counter++;
    }
  }
  diminui = false;
  nome1 = "SUNG";
  nome2 = "JU";
  nome3 = "NO";
  reset = 'ini';

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    this.mudaTitulo = !this.mudaTitulo

    if(this.mudaTitulo == true && this.getHostDimensions() < 480){
      this.diminui = true
      //  this.reset =  this.reset === ':enter' ? '' : ':enter';
      this.nome1 = "SOBRE"
      this.nome2 = "PROJETOS"
      this.nome3 = "CONTATO"
      this.mostraAviso = false
      this.isDisabled = true
      console.log(this.reset)
    }
    else if(this.mudaTitulo == false){
      this.diminui=false;
      this.nome1 = "SUNG";
      this.nome2 = "JU";
      this.nome3 = "NO";
    }
  }
}
