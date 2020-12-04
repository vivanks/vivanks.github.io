from django.http import request
from django.shortcuts import render,redirect
from .models import Experience, About,Project, Blog,Contact



# Create your views here.
def index(request):
    context = {}
    about = list(About.objects.all())
    exp = list(Experience.objects.all())
    exp.reverse()
    projects = list(Project.objects.all())
    blogs = Blog.objects.all()
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
    context['blogs'] = blogs
    
    
    return render(request,'index.html',context)

def contact(request):

    if request.method=="POST":
        message = Contact(
            message=request.POST.get('message'),
            name=request.POST.get('name'),
            email=request.POST.get('email'),
            subject=request.POST.get('subject')
        )
        message.save()
        return redirect('index')

    return redirect('index')
