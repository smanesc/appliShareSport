import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Rando from '../models/rando.model';

@Injectable({
  providedIn: 'root'
})
export class RandoService {

  private apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getRandos(): Observable<Rando[]> {
    return this.httpClient.get<Rando[]>(`${this.apiUrl}/rando`);
  }

  getRando(id: number): Observable<Rando> {
    return this.httpClient.get<Rando>(`${this.apiUrl}/rando/${id}`);
  }
}
