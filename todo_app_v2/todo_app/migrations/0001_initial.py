# Generated by Django 5.0.1 on 2024-02-10 12:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TestCodeModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('operate_user', models.CharField(blank=True, max_length=30, null=True, verbose_name='操作ユーザー')),
                ('created', models.DateTimeField(blank=True, null=True, verbose_name='生成日時')),
                ('update', models.DateTimeField(blank=True, null=True, verbose_name='更新日時')),
                ('del_flg', models.BooleanField(default=False, verbose_name='論理削除フラグ')),
                ('code', models.CharField(blank=True, max_length=30, null=True, verbose_name='コード')),
                ('code_ownership_user', models.CharField(blank=True, max_length=30, null=True, verbose_name='コード所有ユーザー')),
            ],
            options={
                'verbose_name': 'テストコードテーブル',
                'verbose_name_plural': 'テストコードテーブル',
                'db_table': 'test_code_model',
            },
        ),
    ]