import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { VacancyServiceService } from "../services/vacancy-service.service";

import {Vacancy} from "../Vacancy";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  vacancies : Vacancy[] = [];
  com : number = 0;
  constructor(private route : ActivatedRoute, private vacserv : VacancyServiceService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const IdFromRoute = Number(routeParams.get('compId'));
    this.com = IdFromRoute;
    this.getData(IdFromRoute);
  }
  getData(id : number) {
    this.vacserv.getVacancies().subscribe((vacs : Vacancy[]) => this.vacancies = vacs.filter(v => v.company === id) || []);
  }
}
