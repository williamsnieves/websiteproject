# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.datetime_safe


class Migration(migrations.Migration):

    dependencies = [
        ('portfolios', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio',
            name='slug',
            field=models.CharField(default=django.utils.datetime_safe.date.today, max_length=255),
            preserve_default=False,
        ),
    ]
