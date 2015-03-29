# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import filer.fields.image


class Migration(migrations.Migration):

    dependencies = [
        ('portfolios', '0003_auto_20150326_2059'),
    ]

    operations = [
        migrations.AlterField(
            model_name='portfolio',
            name='photo',
            field=filer.fields.image.FilerImageField(related_name='portfolio_large', null=True, to='filer.Image', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='thumb',
            field=filer.fields.image.FilerImageField(related_name='portfolio_thumb', null=True, to='filer.Image', blank=True),
            preserve_default=True,
        ),
    ]
