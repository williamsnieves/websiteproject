from rest_framework import serializers

from .models import Tutorial

class TutorialSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Tutorial
        fields = ('title', 'shortdesc', 'description', 'id_tags')