from django.db import models

# Create your models here.

class Biography(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=255)
    lastname=models.CharField(max_length=255)
    career=models.CharField(max_length=255)
    category_list_short = models.CharField(max_length=255)
    short_description=models.TextField()
    large_description=models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name