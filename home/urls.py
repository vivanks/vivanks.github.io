from django.urls import path,include
from rest_framework import serializers, viewsets, routers

from . import views



urlpatterns = [
	
    path('', views.index, name='index'),
]