# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('labs', '0010_lab_is_comment'),
        ('comments', '0008_auto_20150119_1406'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='lab_id',
            field=models.ForeignKey(to='labs.Lab', blank=True, null=True),
            preserve_default=True,
        ),
    ]
