import { ContatoComponent } from './home/contato/contato.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { ProjetosComponent } from './home/projetos/projetos.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'contato', component:ContatoComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
