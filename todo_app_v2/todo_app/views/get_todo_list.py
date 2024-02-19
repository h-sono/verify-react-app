from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from todo_app.models import Todo
from django.contrib.auth.models import User


@api_view(["GET"])
def get(request, user_id):
    """
    特定ユーザーの全todoを取得

    Args
        todo_id: Todoテーブルのid
        user_id: Userテーブル(Django標準搭載のテーブル:auth_user)のid

    Return
        id: Todoテーブルのid
    """
    # TODO:シリアライザでのバリデーションを追加。
    try:
        # Userテーブルを検索。
        user = User.objects.get(id=user_id)

        # Todoテーブルを検索。
        todos = Todo.objects.filter(user_id=user.id, del_flg=False).values(
            "id", "todo", "appltype", "del_flg", "update_date_time"
        )

        # update_date_timeをdatetimeからstringに変換。
        for item in todos:
            item["update_date_time"] = item["update_date_time"].strftime("%Y-%m-%d")
    except Exception:
        return Response({"error_flg": True}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response({"todo_list": todos}, status=status.HTTP_200_OK)
