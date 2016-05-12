# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0005_auto_20160511_2148'),
    ]

    operations = [
        migrations.AddField(
            model_name='leavemessage',
            name='created',
            field=models.DateTimeField(default=datetime.datetime(2016, 5, 11, 21, 52, 25, 4007)),
        ),
    ]
