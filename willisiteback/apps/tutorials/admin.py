from .models import Tutorial
from django import forms
from django.contrib import admin
from ckeditor.widgets import CKEditorWidget

# Register your models here.

class TutorialAdminForm(forms.ModelForm):
    description = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = Tutorial

@admin.register(Tutorial)
class TutorialAdmin(admin.ModelAdmin):
    form = TutorialAdminForm
    list_display = ('title', 'shortdesc',)

#admin.site.register(Tutorial, TutorialAdminForm)

