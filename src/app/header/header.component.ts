import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private viewportScroller: ViewportScroller,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.document.getElementById('back')?.classList.add('backgroundScroll')
      this.document.getElementById('back1')?.classList.add('backgroundScroll')
      this.document.getElementById('cor-titulo')?.classList.add('cor-titulo')
      this.document.getElementById('cor-titulo1')?.classList.add('cor-titulo')
      this.document.getElementById('cor-titulo2')?.classList.add('cor-titulo')
      this.document.getElementById('cor-titulo3')?.classList.add('cor-titulo')
    }else if(document.body.scrollTop < 20 || document.documentElement.scrollTop < 20){
      this.document.getElementById('back')?.classList.remove('backgroundScroll')
      this.document.getElementById('back1')?.classList.remove('backgroundScroll')
      this.document.getElementById('cor-titulo')?.classList.remove('cor-titulo')
      this.document.getElementById('cor-titulo1')?.classList.remove('cor-titulo')
      this.document.getElementById('cor-titulo2')?.classList.remove('cor-titulo')
      this.document.getElementById('cor-titulo3')?.classList.remove('cor-titulo')
    }
  }

  projetosClick(id: string){
    this.viewportScroller.scrollToAnchor(id)
    console.log('clicado')
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
