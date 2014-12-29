from .models import Tutorial
from django.contrib import admin

# Register your models here.
@admin.register(Tutorial)
class TagAdmin(admin.ModelAdmin):
    list_display = ('title', 'shortdesc',)
