# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('biography', '0004_auto_20150105_1049'),
    ]

    operations = [
        migrations.AddField(
            model_name='biography',
            name='post_description',
            field=models.TextField(default='test'),
            preserve_default=True,
        ),
    ]
