from .models import Lab
from django import forms
from django.contrib import admin
from ckeditor.widgets import CKEditorWidget

# Register your models here.

class LabAdminForm(forms.ModelForm):
    description = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = Lab

@admin.register(Lab)
class LabAdmin(admin.ModelAdmin):
    form = LabAdminForm
    list_display = ('title', 'short_description',)
