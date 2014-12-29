from .models import Lab
from django.contrib import admin

# Register your models here.
@admin.register(Lab)
class TagAdmin(admin.ModelAdmin):
    list_display = ('title', 'description',)
