# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('biography', '0002_auto_20150104_2049'),
    ]

    operations = [
        migrations.RenameField(
            model_name='biography',
            old_name='short_desc',
            new_name='category_list_short',
        ),
        migrations.RenameField(
            model_name='biography',
            old_name='description',
            new_name='large_description',
        ),
        migrations.AddField(
            model_name='biography',
            name='short_description',
            field=models.TextField(default=datetime.date(2015, 1, 5)),
            preserve_default=False,
        ),
    ]
