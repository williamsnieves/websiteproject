# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0014_remove_tutorial_id_comment'),
        ('comments', '0005_auto_20150119_0916'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='id_tutorials',
            field=models.ForeignKey(null=True, to='tutorials.Tutorial'),
            preserve_default=True,
        ),
    ]
