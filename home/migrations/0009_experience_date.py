# Generated by Django 3.1.1 on 2020-12-05 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0008_blog'),
    ]

    operations = [
        migrations.AddField(
            model_name='experience',
            name='date',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
