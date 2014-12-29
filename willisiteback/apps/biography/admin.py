from .models import Biography
from django.contrib import admin

# Register your models here.
@admin.register(Biography)
class BiographyAdmin(admin.ModelAdmin):
    list_display = ('name', 'lastname')

