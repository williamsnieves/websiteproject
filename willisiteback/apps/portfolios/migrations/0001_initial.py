# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Portfolio',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('title', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
                ('path', models.CharField(max_length=255)),
                ('id_categories', models.ForeignKey(to='categories.Category')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
