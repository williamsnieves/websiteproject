from django.db import models
from apps.tags.models import Tag
# Create your models here.

class Lab(models.Model):
    id=models.AutoField(primary_key=True)
    title=models.CharField(max_length=255)
    short_description= models.TextField()
    is_image = models.BooleanField()
    is_medium = models.BooleanField()
    is_light = models.BooleanField()
    is_normal = models.BooleanField()
    description=models.TextField()
    path_video=models.CharField(max_length=255)
    id_tags=models.ForeignKey(Tag)

    def __str__(self):
        return self.title