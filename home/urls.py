from django.urls import path,include
from rest_framework import serializers, viewsets, routers

from . import views

router = routers.DefaultRouter()
router.register(r'exp', views.ExperienceViewSet)

urlpatterns = [
	path('api', include(router.urls)),
    path('', views.index, name='index'),
]