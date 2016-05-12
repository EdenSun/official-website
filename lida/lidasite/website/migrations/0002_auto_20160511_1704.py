# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='leavemessage',
            old_name='content',
            new_name='message',
        ),
        migrations.RenameField(
            model_name='leavemessage',
            old_name='title',
            new_name='subject',
        ),
    ]
