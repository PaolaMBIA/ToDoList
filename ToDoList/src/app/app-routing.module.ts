import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CreateTachesComponent } from './create-taches/create-taches.component';
import {AppLayoutComponent} from './app-layout/app-layout.component';
import {SiteLayoutComponent} from './site-layout/site-layout.component';
import {ListTachesComponent} from './list-taches/list-taches.component';
import {EditTascheComponent} from './edit-tasche/edit-tasche.component';

const routes: Routes = [
  {path: '', component:AppLayoutComponent},

  { path: '', component:SiteLayoutComponent,
    children: [
      {path: 'accueil', component: AccueilComponent},
      {path: 'create-taches', component: CreateTachesComponent},
      {path: 'list-taches', component:ListTachesComponent},
      {path: 'edit-tasche/:id', component:EditTascheComponent}
    ]},

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
