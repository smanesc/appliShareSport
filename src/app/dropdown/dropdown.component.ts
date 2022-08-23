import { Component, OnInit } from '@angular/core';
import { RandoService } from '../services/rando.service';
import Rando from '../models/rando.model'; 

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  randoTable: Rando[] = [];
  randoTableNom: string[] = [];
  selectedRando: any;

  constructor(private serviceRando: RandoService) { }

  
  ngOnInit(): void {
    this.serviceRando
    .getRandos()
    .subscribe((rando => [this.randoTable = rando]));
  }



}
