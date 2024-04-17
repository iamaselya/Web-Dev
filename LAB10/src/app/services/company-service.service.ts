import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {Company} from "../Company";

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private http : HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get('http://127.0.0.1:8000/api/companies') as Observable<Company[]>;
  }
}
