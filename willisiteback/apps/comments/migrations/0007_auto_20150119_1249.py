# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0006_comment_id_tutorials'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='id_tutorials',
            new_name='tutorial_id',
        ),
    ]
