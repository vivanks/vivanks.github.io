# Generated by Django 3.1.1 on 2020-10-20 13:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_experience_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experience',
            name='desc',
            field=models.TextField(),
        ),
    ]
