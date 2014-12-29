from rest_framework import serializers

from .models import Skill

class SkillSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Skill
        fields = ('name', 'amount',)

