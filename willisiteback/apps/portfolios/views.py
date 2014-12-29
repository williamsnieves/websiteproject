from django.shortcuts import render

from rest_framework import viewsets

from .models import Portfolio

from .serializers import PortfolioSerializer

# Create your views here.

class PortfolioViewSet(viewsets.ModelViewSet):
    model = Portfolio
    serializer_class = PortfolioSerializer

    #paginate_by = 1
    #filter_fields = ('name')
