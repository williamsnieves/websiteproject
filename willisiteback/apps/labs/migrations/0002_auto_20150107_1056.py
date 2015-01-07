# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.datetime_safe


class Migration(migrations.Migration):

    dependencies = [
        ('labs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lab',
            name='is_image',
            field=models.BooleanField(default=django.utils.datetime_safe.date.today),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='lab',
            name='short_description',
            field=models.TextField(default=django.utils.datetime_safe.date.today),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='lab',
            name='description',
            field=models.TextField(),
        ),
    ]
