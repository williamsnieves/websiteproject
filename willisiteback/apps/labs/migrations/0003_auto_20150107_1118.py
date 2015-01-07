# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('labs', '0002_auto_20150107_1056'),
    ]

    operations = [
        migrations.AddField(
            model_name='lab',
            name='is_light',
            field=models.BooleanField(default=datetime.date(2015, 1, 7)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='lab',
            name='is_medium',
            field=models.BooleanField(default=datetime.date(2015, 1, 7)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='lab',
            name='is_normal',
            field=models.BooleanField(default=datetime.date(2015, 1, 7)),
            preserve_default=False,
        ),
    ]
