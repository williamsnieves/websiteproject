# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0005_tutorial_photo'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tutorial',
            old_name='is_code',
            new_name='is_thumb_image',
        ),
        migrations.RemoveField(
            model_name='tutorial',
            name='code',
        ),
    ]
