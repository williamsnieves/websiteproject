from .models import Comment
from django.contrib import admin

# Register your models here.
@admin.register(Comment)
class TagAdmin(admin.ModelAdmin):
    list_display = ('username', 'destination', 'comment',)
