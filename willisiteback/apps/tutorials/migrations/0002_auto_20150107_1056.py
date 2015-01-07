# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tutorial',
            name='is_image',
            field=models.BooleanField(default=datetime.date(2015, 1, 7)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tutorial',
            name='is_light',
            field=models.BooleanField(default=datetime.date(2015, 1, 7)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tutorial',
            name='is_medium',
            field=models.BooleanField(default=datetime.date(2015, 1, 7)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tutorial',
            name='is_normal',
            field=models.BooleanField(default=datetime.date(2015, 1, 7)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='tutorial',
            name='description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='tutorial',
            name='shortdesc',
            field=models.TextField(),
        ),
    ]
