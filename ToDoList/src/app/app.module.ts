import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms'

import {TachesServiceService} from './service/taches-service.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CreateTachesComponent } from './create-taches/create-taches.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { ListTachesComponent } from './list-taches/list-taches.component';
import { EditTascheComponent } from './edit-tasche/edit-tasche.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CreateTachesComponent,
    SiteLayoutComponent,
    AppLayoutComponent,
    ListTachesComponent,
    EditTascheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [TachesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
