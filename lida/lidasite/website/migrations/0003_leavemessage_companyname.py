# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0002_auto_20160511_1704'),
    ]

    operations = [
        migrations.AddField(
            model_name='leavemessage',
            name='companyName',
            field=models.CharField(max_length=100, default=None),
        ),
    ]
