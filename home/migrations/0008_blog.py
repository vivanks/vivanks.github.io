# Generated by Django 3.1.1 on 2020-12-04 14:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_contact'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('blog_link', models.CharField(max_length=500)),
                ('date', models.CharField(max_length=500)),
                ('image', models.ImageField(upload_to='blogs')),
            ],
        ),
    ]