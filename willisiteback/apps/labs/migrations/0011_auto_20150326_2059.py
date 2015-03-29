# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import filer.fields.image


class Migration(migrations.Migration):

    dependencies = [
        ('labs', '0010_lab_is_comment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lab',
            name='photo',
            field=filer.fields.image.FilerImageField(related_name='portfolio_large', to='filer.Image', blank=True, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='lab',
            name='thumb',
            field=filer.fields.image.FilerImageField(related_name='portfolio_thumb', to='filer.Image', blank=True, null=True),
            preserve_default=True,
        ),
    ]
