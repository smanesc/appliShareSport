import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-account',
  templateUrl: './tabs-account.component.html',
  styleUrls: ['./tabs-account.component.css']
})
export class TabsAccountComponent implements OnInit {

  nom: string = "TestNom";

  constructor() { }

  ngOnInit(): void {
  }

}
