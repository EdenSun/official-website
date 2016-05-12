# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0003_leavemessage_companyname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='leavemessage',
            name='mobile',
            field=models.CharField(max_length=20, default=None),
        ),
    ]
