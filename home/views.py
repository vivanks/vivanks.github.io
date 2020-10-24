from django.http import request
from django.shortcuts import render,redirect
from .models import Experience, About,Project



# Create your views here.
def index(request):
    context = {}
    about = list(About.objects.all())
    exp = list(Experience.objects.all())
    exp.reverse()
    projects = list(Project.objects.all())

    context['title'] = about[0].title
    context['subtitle'] = about[0].subtitle
    context['about'] = about[0].about
    context['mail'] = about[0].mail
    context['contact'] = about[0].contact
    context['address'] = about[0].address
    context['github'] = about[0].github
    context['twitter'] = about[0].twitter
    context['linkedin'] = about[0].linkedin
    context['dev_to'] = about[0].dev_to
    context['exp'] = exp
    context['projects'] = projects
    
    
    return render(request,'index.html',context)

def contact(request):

    if request.method=="POST":
        print(request.POST)
        return redirect('index')

    return redirect('index')
