from django.shortcuts import render

from rest_framework import viewsets

from .models import Biography

from .serializers import BiographySerializer

# Create your views here.

class BiographyViewSet(viewsets.ModelViewSet):
    model = Biography
    serializer_class = BiographySerializer

    #paginate_by = 1
    #filter_fields = ('name')




