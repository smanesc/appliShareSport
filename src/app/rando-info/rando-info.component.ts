import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import Rando from 'src/app/models/rando.model';
import { RandoService } from 'src/app/services/rando.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-rando-info',
  templateUrl: './rando-info.component.html',
  styleUrls: ['./rando-info.component.css']
})
export class RandoInfoComponent implements OnInit {
  randos!: Observable<Rando[]>;

  constructor(
    private randoService: RandoService,
    private http: HttpClient,
    ) { }


    ngOnInit() {
      this.randos = this.randoService.getRandos().pipe(
        catchError(error => {
          console.log('Error fetching articles:', error);
          return throwError(error);
        }
      ));
    }
}