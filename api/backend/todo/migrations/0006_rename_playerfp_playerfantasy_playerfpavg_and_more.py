# Generated by Django 4.1.7 on 2023-02-24 00:16

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("todo", "0005_alter_playerfantasy_playername"),
    ]

    operations = [
        migrations.RenameField(
            model_name="playerfantasy",
            old_name="playerFP",
            new_name="playerFPAVG",
        ),
        migrations.RemoveField(
            model_name="playerfantasy",
            name="playerFPLast10",
        ),
        migrations.RemoveField(
            model_name="playerfantasy",
            name="playerFPLast5",
        ),
        migrations.AddField(
            model_name="playerfantasy",
            name="playerCost",
            field=models.IntegerField(default=0),
        ),
    ]
