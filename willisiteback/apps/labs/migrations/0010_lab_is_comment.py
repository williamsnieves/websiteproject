# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('labs', '0009_lab_thumb_dims'),
    ]

    operations = [
        migrations.AddField(
            model_name='lab',
            name='is_comment',
            field=models.BooleanField(default=datetime.date(2015, 1, 13)),
            preserve_default=False,
        ),
    ]
