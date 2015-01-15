from django.db import models
from apps.tags.models import Tag
from apps.biography.models import Biography
from filer.fields.image import FilerImageField
# Create your models here.

class Tutorial(models.Model):
    id=models.AutoField(primary_key=True)
    title=models.CharField(max_length=255)
    slug=models.CharField(max_length=255)
    is_image = models.BooleanField()
    is_thumb_image = models.BooleanField()
    is_comment = models.BooleanField()
    photo = FilerImageField(null=True, blank=True, related_name="tutorial_large")
    thumb = FilerImageField(null=True, blank=True, related_name="tutorial_thumb")
    thumb_dims = models.CharField(max_length=255)
    is_medium = models.BooleanField()
    is_light = models.BooleanField()
    is_normal = models.BooleanField()
    shortdesc=models.TextField()
    description=models.TextField()
    id_tags=models.ForeignKey(Tag)
    id_biographies=models.ForeignKey(Biography, default=1, related_name='author')


    def __str__(self):
        return self.title