import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Region from '../models/regions.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getRegions(): Observable<Region[]> {
    return this.httpClient.get<Region[]>(`${this.apiUrl}/regions`);
  }

  getRegionById(id: number): Observable<Region> {
    return this.httpClient.get<Region>(`${this.apiUrl}/regions/${id}`);
  }

}
