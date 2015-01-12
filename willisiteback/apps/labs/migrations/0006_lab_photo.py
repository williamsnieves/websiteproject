# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import filer.fields.image


class Migration(migrations.Migration):

    dependencies = [
        ('filer', '__first__'),
        ('labs', '0005_auto_20150110_1732'),
    ]

    operations = [
        migrations.AddField(
            model_name='lab',
            name='photo',
            field=filer.fields.image.FilerImageField(null=True, blank=True, to='filer.Image'),
            preserve_default=True,
        ),
    ]
