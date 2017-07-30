import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {CalenderComponent } from './calender.component';
import {ToolTipModule} from 'angular2-tooltip';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToolTipModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: 'main',
        component: AppComponent
      },
       {
        path: 'calender',
        component: CalenderComponent
      }
    ])
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap :[CalenderComponent]
})
export class AppModule { }
