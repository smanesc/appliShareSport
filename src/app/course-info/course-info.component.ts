import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import Course from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  courses!: Observable<Course[]>;

  constructor(
    private courseService: CourseService,
    private http: HttpClient,
    ) { }


    ngOnInit() {
      this.courses = this.courseService.getCourses().pipe(
        catchError(error => {
          console.log('Error fetching articles:', error);
          return throwError(error);
        }
      ));
    }
}
