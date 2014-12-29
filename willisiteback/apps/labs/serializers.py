from rest_framework import serializers

from .models import Lab

class LabSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Lab
        fields = ('title', 'description', 'path_video', 'id_tags')