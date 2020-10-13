from django.db import models

# Create your models here.

class Experience(models.Model):
	title = models.CharField(max_length=100)
	period = models.CharField(max_length=100)
	desc = models.CharField(max_length=100)

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
