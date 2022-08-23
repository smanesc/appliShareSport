import { Component, OnInit } from '@angular/core';
import { RandoService } from '../services/rando.service';
import { RegionService } from '../services/region.service';
import { CourseService } from '../services/course.service';

import Rando from '../models/rando.model'; 
import Region from '../models/regions.model';
import Course from '../models/course.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  randoTable: Rando[] = [];
  regionTable: Region[] = [];
  courseTable: Course[] = [];
  selectedArea: any;
  selectedItem: any;
  
  randoTableNom = [{name:'item1'}, {name:'item2'}, {name:'item3'}];

  constructor(private serviceRando: RandoService, private serviceRegion: RegionService, 
      private serviceCourse: CourseService) { }

  ngOnInit(): void {
    // Récupérer les randonnées
    this.serviceRando
    .getRandos()
    .subscribe((rando => [this.randoTable = rando]));
  
    // Récupérer les régions
    this.serviceRegion
    .getRegions()
    .subscribe((region => [this.regionTable = region]));
    
    // Récupérer les courses
    this.serviceCourse
    .getCourses()
    .subscribe((course => [this.courseTable = course]));
    
  }

}
