# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('labs', '0006_lab_photo'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lab',
            old_name='is_code',
            new_name='is_thumb_image',
        ),
        migrations.RemoveField(
            model_name='lab',
            name='code',
        ),
    ]
