# Generated by Django 2.0 on 2018-01-14 21:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boredometer_app', '0002_auto_20180114_2130'),
    ]

    operations = [
        migrations.AddField(
            model_name='lesson',
            name='amount_bored',
            field=models.IntegerField(default=0),
        ),
    ]