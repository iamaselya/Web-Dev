from django.shortcuts import render
from django.http import JsonResponse, HttpResponse

from .models import Vacancy, Company

def Vacancies(request):
    return JsonResponse(list(Vacancy.objects.values()), safe=False)

def VacancyById(request,id_):
    return JsonResponse(list(Vacancy.objects.filter(id=id_).values()), safe=False)

def VacanciesTop(request):
    return JsonResponse(list(Vacancy.objects.order_by("-salary").values()), safe=False)

def Companies(request):
    return JsonResponse(list(Company.objects.values()), safe=False)

def CompanyById(request,id_):
    return JsonResponse(list(Company.objects.filter(id=id_).values()), safe=False)

def CompanyVacancies(request,id_):
    return JsonResponse(list(Vacancy.objects.filter(company_id=id_).values()), safe=False)