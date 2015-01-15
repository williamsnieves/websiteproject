# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('biography', '0005_biography_post_description'),
        ('tutorials', '0009_tutorial_is_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='tutorial',
            name='id_biography',
            field=models.ForeignKey(default=1, to='biography.Biography'),
            preserve_default=True,
        ),
    ]
