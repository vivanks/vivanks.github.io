from rest_framework import serializers
from .models import Experience

class ExperienceSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Experience
		fields = ['title','period','desc']
