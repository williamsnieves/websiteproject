from django.db import models
from apps.categories.models import Category

# Create your models here.

class Portfolio(models.Model):
    id=models.AutoField(primary_key=True)
    title=models.CharField(max_length=255)
    description=models.CharField(max_length=255)
    path=models.CharField(max_length=255)
    slug=models.CharField(max_length=255)
    id_categories=models.ForeignKey(Category)

    def __str__(self):
        return self.title