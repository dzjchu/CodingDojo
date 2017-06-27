import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {UserService} from "./users/user.service";
import { UsersComponent } from './users/users.component';
import { HamburgersComponent } from './hamburgers/hamburgers.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HamburgersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
