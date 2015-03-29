# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import filer.fields.image


class Migration(migrations.Migration):

    dependencies = [
        ('labs', '0011_auto_20150326_2059'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lab',
            name='photo',
            field=filer.fields.image.FilerImageField(related_name='lab_large', null=True, to='filer.Image', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='lab',
            name='thumb',
            field=filer.fields.image.FilerImageField(related_name='lab_thumb', null=True, to='filer.Image', blank=True),
            preserve_default=True,
        ),
    ]
