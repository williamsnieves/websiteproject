from django.db import models
from apps.tags.models import Tag
from filer.fields.image import FilerImageField
# Create your models here.

class Tutorial(models.Model):
    id=models.AutoField(primary_key=True)
    title=models.CharField(max_length=255)
    slug=models.CharField(max_length=255)
    is_image = models.BooleanField()
    is_thumb_image = models.BooleanField()
    photo = FilerImageField(null=True, blank=True)
    is_medium = models.BooleanField()
    is_light = models.BooleanField()
    is_normal = models.BooleanField()
    shortdesc=models.TextField()
    description=models.TextField()
    id_tags=models.ForeignKey(Tag)

    def __str__(self):
        return self.title