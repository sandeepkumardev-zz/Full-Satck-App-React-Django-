# Generated by Django 3.0.2 on 2020-03-26 08:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_task_num'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='num',
            new_name='val',
        ),
    ]