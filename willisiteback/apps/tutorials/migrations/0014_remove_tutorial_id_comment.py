# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0013_tutorial_id_comment'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tutorial',
            name='id_comment',
        ),
    ]
