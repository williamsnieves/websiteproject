from rest_framework import serializers

from .models import Portfolio

class PortfolioSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Portfolio
        fields = ('title', 'description', 'path', 'id_categories',)

