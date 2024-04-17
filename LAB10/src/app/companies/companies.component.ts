import { Component, OnInit } from '@angular/core';
import {CompanyServiceService} from "../services/company-service.service";

import {Company} from "../Company";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies : Company[] = [];
  constructor(private compserv : CompanyServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.compserv.getCompanies().subscribe((comps) => this.companies = comps);
  }

}
