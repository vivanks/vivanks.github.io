from django.db import models

# Create your models here.

class Experience(models.Model):
	title = models.CharField(max_length=100)
	period = models.CharField(max_length=100)
	desc = models.TextField()
	link = models.CharField(max_length=200)

class About(models.Model):
	title = models.CharField(max_length=1000)
	subtitle = models.CharField(max_length=1000)
	about = models.TextField()
	mail = models.EmailField()
	contact = models.CharField(max_length=100)
	address = models.TextField()
	github = models.CharField(max_length=1000)
	twitter = models.CharField(max_length=1000)
	linkedin = models.CharField(max_length=1000)
	dev_to = models.CharField(max_length=1000)

class Project(models.Model):
	title = models.CharField(max_length=100)
	sub_title = models.CharField(max_length=100)
	repo_link = models.CharField(max_length=500)
	image = models.ImageField(upload_to = 'projects')
