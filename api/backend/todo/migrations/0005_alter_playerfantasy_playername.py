# Generated by Django 4.1.7 on 2023-02-23 19:56

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("todo", "0004_playerfantasy"),
    ]

    operations = [
        migrations.AlterField(
            model_name="playerfantasy",
            name="playerName",
            field=models.CharField(max_length=30),
        ),
    ]
