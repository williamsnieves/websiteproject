# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0007_auto_20150119_1249'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='tutorial_id',
            field=models.ForeignKey(blank=True, null=True, to='tutorials.Tutorial'),
        ),
    ]
