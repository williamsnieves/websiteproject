from django.shortcuts import render

from rest_framework import viewsets

from .models import Lab

from .serializers import LabSerializer

# Create your views here.

class LabViewSet(viewsets.ModelViewSet):
    model = Lab
    serializer_class = LabSerializer

    #paginate_by = 1
    #filter_fields = ('name')
