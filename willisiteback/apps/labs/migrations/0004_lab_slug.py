# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('labs', '0003_auto_20150107_1118'),
    ]

    operations = [
        migrations.AddField(
            model_name='lab',
            name='slug',
            field=models.CharField(default=datetime.date(2015, 1, 7), max_length=255),
            preserve_default=False,
        ),
    ]
