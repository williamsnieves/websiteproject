from django.db import models

from apps.tutorials.models import Tutorial
from apps.labs.models import Lab
# Create your models here.

class Comment(models.Model):
    id=models.AutoField(primary_key=True)
    comment=models.TextField()
    destination=models.CharField(max_length=255)
    created=models.DateTimeField()
    username=models.CharField(max_length=255)
    link_profile_image=models.CharField(max_length=255)
    tutorial_id = models.ForeignKey(Tutorial, null=True, blank=True)
    lab_id = models.ForeignKey(Lab, null=True, blank=True)

    def __str__(self):
        return self.comment