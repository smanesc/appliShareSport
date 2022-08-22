import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-form-account',
  templateUrl: './form-account.component.html',
  styleUrls: ['./form-account.component.css'],
})

export class FormAccountComponent implements OnInit {

  identite: FormGroup;
  nom: string = "NomTest";
  prenom: string = "PrenomTest";
  email: string = "email@test";
  password: string = "pwdTest";

  isDisabled: boolean= true;

  constructor() {
    this.identite = new FormGroup({
      nom: new FormControl({value: '', disabled: this.isDisabled}, Validators.required),
      prenom:new FormControl({value: '', disabled: this.isDisabled}, Validators.required),
      email: new FormControl({value: '', disabled: this.isDisabled}, Validators.required),
      password: new FormControl({value: '', disabled: this.isDisabled}, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  enableForm(): void {
    for (let field in this.identite.controls) {
      this.identite.get(field)?.enable();
    }
  }

  disableForm(): void {
    for (let field in this.identite.controls) {
      this.identite.get(field)?.disable();
    }
  }

}
