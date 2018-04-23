import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { FilterPipe } from './filter.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MyAutoFocusDirective } from './my-auto-focus.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskFormComponent,
    TasksComponent,
    TaskItemComponent,
    FilterPipe,
    MyAutoFocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
