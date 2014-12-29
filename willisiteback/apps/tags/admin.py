from .models import Tag
from django.contrib import admin

# Register your models here.
@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)