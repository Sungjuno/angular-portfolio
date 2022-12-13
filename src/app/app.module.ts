import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './home/projetos/projetos.component';
import { ContatoComponent } from './home/contato/contato.component';
import { AboutComponent } from './home/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotaoSungComponent } from './styles/botao-sung/botao-sung.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjetosComponent,
    ContatoComponent,
    AboutComponent,
    BotaoSungComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
