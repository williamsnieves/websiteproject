from django.db import models
# Create your models here.

class Comment(models.Model):
    id=models.AutoField(primary_key=True)
    comment=models.TextField()
    destination=models.CharField(max_length=255)
    created=models.DateField()
    username=models.CharField(max_length=255)
    link_profile_image=models.CharField(max_length=255)

    def __str__(self):
        return self.comment