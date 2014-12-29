from django.shortcuts import render

from rest_framework import viewsets

from .models import Tag

from .serializers import TagSerializer

# Create your views here.

class TagViewSet(viewsets.ModelViewSet):
    model = Tag
    serializer_class = TagSerializer

    #paginate_by = 1
    #filter_fields = ('name')