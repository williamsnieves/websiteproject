# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0011_auto_20150115_1325'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tutorial',
            old_name='id_biography',
            new_name='id_biographies',
        ),
    ]
