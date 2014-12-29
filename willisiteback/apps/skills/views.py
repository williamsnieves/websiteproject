from django.shortcuts import render

from rest_framework import viewsets

from .models import Skill

from .serializers import SkillSerializer

# Create your views here.

class SkillViewSet(viewsets.ModelViewSet):
    model = Skill
    serializer_class = SkillSerializer

    #paginate_by = 1
    #filter_fields = ('name')
