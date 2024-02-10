from django.db import models
from .base_models import BaseModel


class TestCodeModel(BaseModel):
    """ テストコードモデル """
    class Meta:
        db_table = "test_code_model"
        verbose_name = verbose_name_plural = "テストコードテーブル"

    code = models.CharField(verbose_name="コード", max_length=30, null=True, blank=True)
    code_ownership_user = models.CharField(verbose_name="コード所有ユーザー", max_length=30, null=True, blank=True)
