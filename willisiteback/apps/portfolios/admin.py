from .models import Portfolio
from django.contrib import admin

# Register your models here.
@admin.register(Portfolio)
class BiographyAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')
