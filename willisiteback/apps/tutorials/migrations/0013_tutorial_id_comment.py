# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0005_auto_20150119_0916'),
        ('tutorials', '0012_auto_20150115_1341'),
    ]

    operations = [
        migrations.AddField(
            model_name='tutorial',
            name='id_comment',
            field=models.ForeignKey(to='comments.Comment', default=56),
            preserve_default=True,
        ),
    ]
