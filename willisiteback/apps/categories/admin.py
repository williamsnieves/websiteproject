from .models import Category
from django.contrib import admin

# Register your models here.
@admin.register(Category)
class BiographyAdmin(admin.ModelAdmin):
    list_display = ('name', 'type')