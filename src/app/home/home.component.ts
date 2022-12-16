import { Component, OnInit,  HostListener, ElementRef  } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('init',[
      state('start', style({ opacity: 1,transform: 'none'})),
      state('end', style({opacity:0, transform: 'translateX(-3rem'})),
      transition('start <=> end',[animate('.3s')]),
      transition(':enter',[
        style({opacity: 0,transform: 'translateX(-3rem'}),
        animate('.3s'),
        style({opacity: 1,transform: 'none'})]),
    ]),
    trigger('init1',[
      state('start', style({ opacity: 1,transform: 'none'})),
      state('end', style({opacity:0, transform: 'translateX(-3rem'})),
      transition('start <=> end',[animate('.3s')]),
      transition(':enter',[
        style({opacity: 0,transform: 'translateX(-3rem'}),
        animate('.3s .2s'),
        style({opacity: 1,transform: 'none'})]),
    ]),
    trigger('init2',[
      state('start', style({ opacity: 1,transform: 'none'})),
      state('end', style({opacity:0, transform: 'translateX(-3rem'})),
      transition('start <=> end',[animate('.3s')]),
      transition(':enter',[
        style({opacity: 0,transform: 'translateX(-3rem'}),
        animate('.3s .4s'),
        style({opacity: 1,transform: 'none'})]),
    ]),
    trigger('fade', [
      state('active', style({ opacity: .2, transform: 'none'})),
      state('inactive', style({ opacity: 1, transform: 'translateY(-5px)'})),
      transition('active <=> inactive', [animate('.7s')])])
]
})
export class HomeComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.getHostDimensions();
  }

  faBars = faBars

  nome1 = 'SUNG';
  nome2 = 'JU';
  nome3 = 'NO';

  reset = true;
  mobile = false;

  @HostListener('window:resize',['$event'])
  getHostDimensions(){
    if(window.innerWidth <= 480){
      this.mobile = true
    }else{
      this.mobile = false
    }
    return window.innerWidth
  }

  times = 100;
  counter = 0;
  state = 'inactive'
  onDone() {
    if (this.counter < this.times) {
      this.state = this.state === 'active' ? 'inactive' : 'active';
      this.counter++;
    }
  }

  tocado=true;
  mostraAviso = true;
  fontSizeSobre = false;
  fontPadding = false;

  setMobile(){
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {

    if(this.getHostDimensions() <= 480 ){
      this.tocado = !this.tocado
    }else{
      return
    }

    if(this.getHostDimensions() <= 480 && this.nome1=="SUNG"){
      this.mostraAviso = false
      setTimeout(() => {
        this.nome1 = "SOBRE";
        this.nome2 = "PROJETOS";
        this.nome3 = "CONTATO";
        this.tocado = !this.tocado
        this.fontSizeSobre = !this.fontSizeSobre
        this.fontPadding = !this.fontPadding
      }, 300);

    }else if(this.nome1 = "SOBRE"){
      setTimeout(()=>{
        this.mostraAviso = true
        this.nome1 = 'SUNG';
        this.nome2 = 'JU';
        this.nome3 = 'NO';
        this.tocado = !this.tocado
        this.fontSizeSobre = !this.fontSizeSobre
        this.fontPadding = !this.fontPadding
      },300)
    }
  }

}
