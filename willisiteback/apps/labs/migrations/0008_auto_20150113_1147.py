# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import filer.fields.image


class Migration(migrations.Migration):

    dependencies = [
        ('filer', '__first__'),
        ('labs', '0007_auto_20150111_1523'),
    ]

    operations = [
        migrations.AddField(
            model_name='lab',
            name='thumb',
            field=filer.fields.image.FilerImageField(blank=True, to='filer.Image', related_name='lab_thumb', null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='lab',
            name='photo',
            field=filer.fields.image.FilerImageField(blank=True, to='filer.Image', related_name='lab_large', null=True),
        ),
    ]
