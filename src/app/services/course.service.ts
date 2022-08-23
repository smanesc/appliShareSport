import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Course from '../models/course.model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.apiUrl}/course`);
  }

  getCourse(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.apiUrl}/course/${id}`);
  }
}
