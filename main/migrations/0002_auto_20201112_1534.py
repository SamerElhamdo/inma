# Generated by Django 3.1.3 on 2020-11-12 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='full_name',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='customer',
            name='number_phone',
            field=models.CharField(blank=True, max_length=25),
        ),
    ]
