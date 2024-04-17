import json
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt

from api.models import Vacancy, Company

@csrf_exempt
def Vacancies(request):
    if request.method == "GET":
        return JsonResponse(list(Vacancy.objects.values()), safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        vac = Vacancy.objects.create(name=data.get('name',''),
                                     description=data.get('description',''),
                                     salary=data.get('salary',''),
                                     company_id=data.get('company_id',''))
        return JsonResponse(vac.to_json(), safe=False)

@csrf_exempt
def VacancyById(request,id_):
    try:
        req_vac = Vacancy.objects.get(id=id_)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == "GET":
        return JsonResponse(req_vac.to_json(), safe=False)
    elif request.method == "PATCH":
        data = json.loads(request.body)
        req_vac.name = data.get('name',req_vac.name)
        req_vac.description = data.get('description',req_vac.description)
        req_vac.salary = data.get('salary',req_vac.salary)
        req_vac.company_id = data.get('company_id',req_vac.company_id)
        req_vac.save()
        return JsonResponse(req_vac.to_json())
    elif request.method == "DELETE":
        temp = req_vac
        req_vac.delete()
        return JsonResponse(temp.to_json())

def VacanciesTop(request):
    return JsonResponse(list(Vacancy.objects.order_by("-salary").values()), safe=False)

@csrf_exempt
def Companies(request):
    if request.method == "GET":
        return JsonResponse(list(Company.objects.values()), safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        com = Company.objects.create(name=data.get('name', ''),
                                     description=data.get('description', ''),
                                     city=data.get('city', ''),
                                     address=data.get('address', ''))
        return JsonResponse(com.to_json(), safe=False)

@csrf_exempt
def CompanyById(request,id_):
    try:
        req_com = Company.objects.get(id=id_)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == "GET":
        return JsonResponse(req_com.to_json(), safe=False)
    elif request.method == "PATCH":
        data = json.loads(request.body)
        req_com.name = data.get('name', req_com.name)
        req_com.description = data.get('description', req_com.description)
        req_com.city = data.get('city', req_com.city)
        req_com.address = data.get('address', req_com.address)
        req_com.save()
        return JsonResponse(req_com.to_json())
    elif request.method == "DELETE":
        temp = req_com
        req_com.delete()
        return JsonResponse(temp.to_json())

def CompanyVacancies(request,id_):
    return JsonResponse(list(Vacancy.objects.filter(company_id=id_).values()), safe=False)