# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0004_auto_20160511_2147'),
    ]

    operations = [
        migrations.AlterField(
            model_name='leavemessage',
            name='companyName',
            field=models.CharField(max_length=100, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='leavemessage',
            name='mobile',
            field=models.CharField(max_length=20, default=None, null=True),
        ),
    ]
