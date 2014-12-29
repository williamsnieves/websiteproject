from django.shortcuts import render

from rest_framework import viewsets

from .models import Tutorial

from .serializers import TutorialSerializer

# Create your views here.

class TutorialViewSet(viewsets.ModelViewSet):
    model = Tutorial
    serializer_class = TutorialSerializer

    #paginate_by = 1
    #filter_fields = ('name')

