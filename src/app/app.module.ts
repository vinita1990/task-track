import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './tasks.service';

// const appRoutes: Routes = [
//   { path:'', redirectTo:'/tasks', pathMatch:'full'},
//   { path:'tasks', component:TasksComponent}
 
// ]

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule
  ],
  providers: [ TasksService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
