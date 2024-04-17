import { Component, OnInit } from '@angular/core';
import { VacancyServiceService } from "../services/vacancy-service.service";

import {Vacancy} from "../Vacancy";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  vacancies : Vacancy[] = [];
  constructor(private vacserv : VacancyServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.vacserv.getVacancies().subscribe((vacs) => this.vacancies = vacs);
  }

}
