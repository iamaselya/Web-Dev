from django.urls import path
from . import views

urlpatterns = [
    #fbv
    #path('api/companies', views.Companies, name='companies'),
    #path('api/companies/<int:id_>', views.CompanyById, name='company'),
    #path('api/companies/<int:id_>/vacancies', views.CompanyVacancies, name='company vacancies'),
    #path('api/vacancies', views.Vacancies, name='vacancies'),
    #path('api/vacancies/<int:id_>', views.VacancyById, name='vacancy'),
    #path('api/vacancies/top_ten', views.VacanciesTop, name='top_ten_vacancies'),

    #cbv
    path('api/companies', views.CompaniesView.as_view(), name='companies'),
    path('api/companies/<int:pk>', views.CompanyView.as_view(), name='company'),
    path('api/companies/<int:pk>/vacancies', views.CompanyVacanciesView.as_view(), name='company vacancies'),
    path('api/vacancies', views.VacanciesView.as_view(), name='vacancies'),
    path('api/vacancies/<int:pk>', views.VacancyView.as_view(), name='vacancy'),
    path('api/vacancies/top_ten', views.VacanciesTop.as_view(), name='top_ten_vacancies'),
]