# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('biography', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='biography',
            name='short_desc',
            field=models.CharField(default=datetime.date(2015, 1, 4), max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='biography',
            name='description',
            field=models.TextField(),
        ),
    ]
