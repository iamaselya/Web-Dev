import json
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views import View
from django.views.generic import ListView
from rest_framework.generics import GenericAPIView
from rest_framework import mixins, views

from api.serializers import VacancySerializer, CompanySerializer
from api.models import Vacancy, Company
from rest_framework.response import Response


class VacanciesView(GenericAPIView, mixins.CreateModelMixin, mixins.ListModelMixin):
    serializer_class = VacancySerializer
    queryset = Vacancy.objects.all()
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class VacancyView(GenericAPIView, mixins.RetrieveModelMixin, mixins.DestroyModelMixin, mixins.UpdateModelMixin):
    serializer_class = VacancySerializer
    queryset = Vacancy.objects.all()
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class VacanciesTop(ListView, views.APIView):
    def get(self, request):
        queryset = Vacancy.objects.all()
        queryset = queryset.order_by("-salary")
        return Response(VacancySerializer(queryset,many=True).data)

@method_decorator(csrf_exempt, name='dispatch')
class CompaniesView(views.APIView):
    def get(self, request):
        return Response(CompanySerializer(Company.objects.all(),many=True).data)
    def post(self, request):
        data = json.loads(request.body)
        com = Company.objects.create(name=data.get('name', ''),
                                     description=data.get('description', ''),
                                     city=data.get('city', ''),
                                     address=data.get('address', ''))
        return Response(CompanySerializer(com).data)

@method_decorator(csrf_exempt, name='dispatch')
class CompanyView(views.APIView):
    def get(self,request, pk):
        req_com = Company.objects.get(id=pk)
        return Response(CompanySerializer(req_com).data)
    def patch(self, request, pk):
        req_com = Company.objects.get(id=pk)
        data = json.loads(request.body)
        req_com.name = data.get('name', req_com.name)
        req_com.description = data.get('description', req_com.description)
        req_com.city = data.get('city', req_com.city)
        req_com.address = data.get('address', req_com.address)
        req_com.save()
        return Response(CompanySerializer(req_com).data)
    def delete(self, request, pk):
        req_com = Company.objects.get(id=pk)
        temp = req_com
        req_com.delete()
        return Response(CompanySerializer(temp).data)
class CompanyVacanciesView(views.APIView):
    def get(self,request,pk):
        return JsonResponse(list(Vacancy.objects.filter(company_id=pk).values()), safe=False)