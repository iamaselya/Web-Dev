import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompaniesComponent} from "./companies/companies.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {CompanyComponent} from "./company/company.component";

const routes: Routes = [
  {path : 'companies', component: CompaniesComponent},
  {path : 'companies/:compId', component: CompanyComponent},
  {path : 'vacancies', component: VacanciesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
