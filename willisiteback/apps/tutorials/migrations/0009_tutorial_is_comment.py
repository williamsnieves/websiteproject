# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0008_tutorial_thumb_dims'),
    ]

    operations = [
        migrations.AddField(
            model_name='tutorial',
            name='is_comment',
            field=models.BooleanField(default=datetime.date(2015, 1, 13)),
            preserve_default=False,
        ),
    ]
