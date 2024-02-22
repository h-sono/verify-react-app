from django.db import models


class BaseModel(models.Model):
    """ ベースモデル """
    created_date_time = models.DateTimeField(verbose_name="生成日時", null=True, blank=True)
    update_date_time = models.DateTimeField(verbose_name="更新日時", null=True, blank=True)
    del_flg = models.BooleanField(verbose_name="論理削除フラグ", default=False)

    class Meta:
        abstract = True  # 抽象基底クラスとなる

    # 管理サイトにて外部キーを選択する際にidのみが表示されるようにする
    def __str__(self):
        return u"%s" % (self.id)
