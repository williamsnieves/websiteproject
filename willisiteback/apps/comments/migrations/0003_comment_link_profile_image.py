# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0002_auto_20141019_1717'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='link_profile_image',
            field=models.CharField(max_length=255, default=datetime.date(2015, 1, 16)),
            preserve_default=False,
        ),
    ]
