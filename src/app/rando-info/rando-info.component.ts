import { Component, OnInit } from '@angular/core';
import Rando from 'src/app/models/rando.model';
import { RandoService } from 'src/app/services/rando.service';


@Component({
  selector: 'app-rando-info',
  templateUrl: './rando-info.component.html',
  styleUrls: ['./rando-info.component.css']
})
export class RandoInfoComponent implements OnInit {
  randoTable: Rando[] = [];
  randoTableNom: string[] = [];
  selectedRando: any;

  constructor(private serviceRando: RandoService) { }


    ngOnInit() {
    this.serviceRando
    .getRandos()
    .subscribe((rando => [this.randoTable = rando]));
    }
}