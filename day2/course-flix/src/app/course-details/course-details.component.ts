import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseDetails:any;
  constructor(private courseService:CourseService, private activatedRoute:ActivatedRoute) {
    console.log('***********************8')
    console.log(this.activatedRoute);
    
   }

  ngOnInit() {
    this.courseDetails = this.courseService.getCourseDetails(+this.activatedRoute.snapshot.paramMap.get('id'));
    this.courseDetails =  JSON.stringify(this.courseDetails[0]);
    this.courseDetails = JSON.parse(this.courseDetails);
  }

}
