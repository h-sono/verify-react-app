from django.db import models
from .base_models import BaseModel
from django.contrib.auth.models import User


class Todo(BaseModel):
    """ todo """
    class Meta:
        db_table = "todo"
        verbose_name = verbose_name_plural = "todo格納テーブル"

    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(
        User,
        verbose_name="ユーザーID",
        on_delete=models.CASCADE,
        db_column="user_id"
    )
    todo = models.CharField(verbose_name="todo内容", max_length=1000, null=True, blank=True)
    appltype = models.JSONField(verbose_name="登録種別", default=list)
