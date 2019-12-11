import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TemplateComponent } from './template/template.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { NameFormatPipe } from './pipes/name-format.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterUsersPipe } from './pipes/filter-users.pipe';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { OuterComponent } from './outer/outer.component';
import { InnerComponent } from './inner/inner.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TemplateComponent,
    TwoWayComponent,
    NameFormatPipe,
    SortPipe,
    FilterUsersPipe,
    CoursesComponent,
    CourseComponent,
    OuterComponent,
    InnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
