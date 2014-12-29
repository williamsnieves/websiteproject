# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tags', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tutorial',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('shortdesc', models.CharField(max_length=255)),
                ('description', models.TextField(max_length=255)),
                ('id_tags', models.ForeignKey(to='tags.Tag')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
