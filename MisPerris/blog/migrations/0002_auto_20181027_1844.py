# Generated by Django 2.1.2 on 2018-10-27 21:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postulante',
            name='nacimiento',
            field=models.DateField(),
        ),
    ]
