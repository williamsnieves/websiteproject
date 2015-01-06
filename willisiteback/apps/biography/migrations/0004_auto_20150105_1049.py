# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('biography', '0003_auto_20150105_1046'),
    ]

    operations = [
        migrations.AddField(
            model_name='biography',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=datetime.date(2015, 1, 5)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='biography',
            name='updated_at',
            field=models.DateTimeField(default=datetime.date(2015, 1, 5), auto_now=True),
            preserve_default=False,
        ),
    ]
