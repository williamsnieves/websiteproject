from django.shortcuts import render

from rest_framework import viewsets

from .models import Comment

from .serializers import CommentSerializer

# Create your views here.

class CommentViewSet(viewsets.ModelViewSet):
    model = Comment
    serializer_class = CommentSerializer

    #paginate_by = 1
    #filter_fields = ('name')

