# Generated by Django 4.1.7 on 2023-02-23 10:07

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("todo", "0002_players"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Players",
            new_name="Player",
        ),
    ]
