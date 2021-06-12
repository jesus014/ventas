import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatSidenavModule}from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import{HttpClientModule} from'@angular/common/http'
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from'@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; //uso para los inputs
import { DialogClienteComponent } from './cliente/dialog/dialogcliente.component';
import{MatSnackBarModule}from '@angular/material/snack-bar';
import{FormsModule} from '@angular/forms' //para los formularios

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    DialogClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
