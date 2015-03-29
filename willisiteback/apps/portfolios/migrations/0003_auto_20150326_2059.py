# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc
import filer.fields.image


class Migration(migrations.Migration):

    dependencies = [
        ('filer', '__first__'),
        ('portfolios', '0002_portfolio_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolio',
            name='is_normal',
            field=models.BooleanField(default=datetime.datetime(2015, 3, 27, 1, 29, 29, 643107, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='portfolio',
            name='is_thumb_image',
            field=models.BooleanField(default=datetime.datetime(2015, 3, 27, 1, 29, 36, 145119, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='portfolio',
            name='photo',
            field=filer.fields.image.FilerImageField(related_name='lab_large', to='filer.Image', blank=True, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='portfolio',
            name='thumb',
            field=filer.fields.image.FilerImageField(related_name='lab_thumb', to='filer.Image', blank=True, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='portfolio',
            name='thumb_dims',
            field=models.CharField(max_length=255, default='100x100'),
            preserve_default=True,
        ),
    ]
