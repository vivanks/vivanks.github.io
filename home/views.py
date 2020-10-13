from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from .serializer import ExperienceSerializer
from .models import Experience, About



# Create your views here.
def index(request):
	return render(request,'index.html')



class ExperienceViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    permission_classes = [permissions.IsAuthenticated]


