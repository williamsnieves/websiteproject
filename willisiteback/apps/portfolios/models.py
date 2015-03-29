from django.db import models
from apps.categories.models import Category
from filer.fields.image import FilerImageField

# Create your models here.

class Portfolio(models.Model):
    id=models.AutoField(primary_key=True)
    title=models.CharField(max_length=255)
    description=models.CharField(max_length=255)
    photo = FilerImageField(null=True, blank=True, related_name="portfolio_large")
    thumb = FilerImageField(null=True, blank=True, related_name="portfolio_thumb")
    thumb_dims = models.CharField(max_length=255, default="100x100")
    is_thumb_image = models.BooleanField()
    is_normal = models.BooleanField()
    path=models.CharField(max_length=255)
    slug=models.CharField(max_length=255)
    id_categories=models.ForeignKey(Category)

    def __str__(self):
        return self.title