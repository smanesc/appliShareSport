import { Component, OnInit } from '@angular/core';
import Course from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  courseTable: Course[] = [];
  courseTableNom: string[] = [];
  selectedCourse: any;

  constructor(
    private serviceCourse: CourseService,
    ) { }


    ngOnInit() {
      this.serviceCourse
    .getCourses()
    .subscribe((course => [this.courseTable = course]));
    }
}
