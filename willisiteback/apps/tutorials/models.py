from django.db import models
from apps.tags.models import Tag
# Create your models here.

class Tutorial(models.Model):
    id=models.AutoField(primary_key=True)
    title=models.CharField(max_length=255)
    shortdesc=models.CharField(max_length=255)
    description=models.TextField(max_length=255)
    id_tags=models.ForeignKey(Tag)

    def __str__(self):
        return self.title