from django.db import models
from todo_app_api.models.base_models import BaseModel


class TestCodeModel(BaseModel):
    """ テストコードモデル """
    class Meta:
        db_table = "test_code_model"
        verbose_name = verbose_name_plural = "テストコードテーブル"

    code = models.CharField(verbose_name="コード", max_length=30, null=True, blank=True)
    code_ownership_user = models.CharField(verbose_name="コード所有ユーザー", max_length=30, null=True, blank=True)


class TestCodeDetailModel(BaseModel):
    """ テストコード詳細モデル """
    class Meta:
        db_table = "test_code_detail_model"
        verbose_name = verbose_name_plural = "テストコード詳細テーブル"

    code_id = models.ForeignKey(
        TestCodeModel,
        verbose_name="コードid",
        on_delete=models.DO_NOTHING,
        db_column="code_id",
        limit_choices_to={"del_flg": False}, # 参照先のレコードのdel_flgがFalseのもののみ管理サイトで選択可能
        related_name="+" # 逆参照無効化
    )
    code_name = models.CharField(verbose_name="コード名",max_length=50,  null=True, blank=True)
    releated_code = models.CharField(verbose_name="関連コード", max_length=30, null=True, blank=True)
