import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import { Vacancy } from "../Vacancy";

@Injectable({
  providedIn: 'root'
})
export class VacancyServiceService {

  constructor(private http : HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get('http://127.0.0.1:8000/api/vacancies') as Observable<Vacancy[]>;
  }
}
