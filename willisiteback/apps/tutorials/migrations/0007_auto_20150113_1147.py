# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import filer.fields.image


class Migration(migrations.Migration):

    dependencies = [
        ('filer', '__first__'),
        ('tutorials', '0006_auto_20150111_1523'),
    ]

    operations = [
        migrations.AddField(
            model_name='tutorial',
            name='thumb',
            field=filer.fields.image.FilerImageField(blank=True, to='filer.Image', related_name='tutorial_thumb', null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='tutorial',
            name='photo',
            field=filer.fields.image.FilerImageField(blank=True, to='filer.Image', related_name='tutorial_large', null=True),
        ),
    ]
