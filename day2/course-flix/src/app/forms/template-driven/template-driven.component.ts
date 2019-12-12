import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  course: Course;

  constructor(private courseService:CourseService, private router:Router) { }

  ngOnInit() {
  }

  submitCourse({coursename, price}){
    this.course.name = coursename;
    this.course.price = price;
    this.courseService.addCourse(this.course);
    this.router.navigate(['courses/1']);
  }
}
