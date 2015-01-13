# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('labs', '0008_auto_20150113_1147'),
    ]

    operations = [
        migrations.AddField(
            model_name='lab',
            name='thumb_dims',
            field=models.CharField(max_length=255, default=datetime.date(2015, 1, 13)),
            preserve_default=False,
        ),
    ]
