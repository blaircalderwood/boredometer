# Generated by Django 2.0.1 on 2018-01-27 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boredometer_app', '0003_lesson_amount_bored'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lesson',
            name='number',
        ),
        migrations.AlterField(
            model_name='lesson',
            name='id',
            field=models.CharField(max_length=6, primary_key=True, serialize=False, unique=True),
        ),
    ]