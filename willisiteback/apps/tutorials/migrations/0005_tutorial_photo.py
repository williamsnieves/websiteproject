# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import filer.fields.image


class Migration(migrations.Migration):

    dependencies = [
        ('filer', '__first__'),
        ('tutorials', '0004_auto_20150110_1732'),
    ]

    operations = [
        migrations.AddField(
            model_name='tutorial',
            name='photo',
            field=filer.fields.image.FilerImageField(to='filer.Image', blank=True, null=True),
            preserve_default=True,
        ),
    ]
