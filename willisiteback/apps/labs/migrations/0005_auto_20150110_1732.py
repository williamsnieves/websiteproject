# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('labs', '0004_lab_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='lab',
            name='code',
            field=models.TextField(default=datetime.date(2015, 1, 10)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='lab',
            name='is_code',
            field=models.BooleanField(default=datetime.date(2015, 1, 10)),
            preserve_default=False,
        ),
    ]
