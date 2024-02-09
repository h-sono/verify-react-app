from django.contrib import admin
from cannaapp.models.models import (
    TestCodeModel,
    TestCodeDetailModel,
)


class TestCodeModelAdmin(admin.ModelAdmin):
    list_display = ("id", "code", "code_ownership_user")


class TestCodeDetailModelAdmin(admin.ModelAdmin):
    list_display = ("id", "code_id", "code", "code_ownership_user", "code_name", "releated_code")

    def code(self, obj):
        return obj.code_id.code
    code.admin_order_field = "code_id__code"
    code.short_description = "コード"
    
    def code_ownership_user(self, obj):
        return obj.code_id.code_ownership_user
    code_ownership_user.admin_order_field = "code_id__code_ownership_user"
    code_ownership_user.short_description = "コード所有ユーザー"

admin.site.register(TestCodeModel, TestCodeModelAdmin)
admin.site.register(TestCodeDetailModel, TestCodeDetailModelAdmin)