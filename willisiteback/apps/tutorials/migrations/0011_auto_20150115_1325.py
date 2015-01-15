# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0010_tutorial_id_biography'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tutorial',
            name='id_biography',
            field=models.ForeignKey(default=1, related_name='author', to='biography.Biography'),
        ),
    ]
