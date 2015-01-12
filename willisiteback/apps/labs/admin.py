from .models import Lab
from django import forms
from django.contrib import admin
from ckeditor.widgets import CKEditorWidget

# Register your models here.

class LabAdminForm(forms.ModelForm):
    short_description = forms.CharField(widget=CKEditorWidget())
    description = forms.CharField(widget=CKEditorWidget())
    code = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = Lab

@admin.register(Lab)
class LabAdmin(admin.ModelAdmin):
    form = LabAdminForm
    list_display = ('title', 'short_description',)
