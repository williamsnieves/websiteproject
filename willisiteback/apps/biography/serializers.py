from rest_framework import serializers

from .models import Biography

class BiographySerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Biography
        fields = ('name', 'lastname', 'career', 'description',)

