from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from todo_app.models import Todo
from todo_app.const.appl_type import MODIFIY, DELETE
from datetime import datetime
from django.contrib.auth.models import User


@api_view(["POST"])
def post(request):
    """
    todoを新規追加

    Args
        user_id: Userテーブル(Django標準搭載のテーブル:auth_user)のid
        todo: Todoテーブルのtodo

    Return
        id: Todoテーブルのid
    """
    # TODO:シリアライザでのバリデーションを追加。
    user_id = request.data.get("user_id")
    todo = request.data.get("todo")

    # Userテーブル(Django標準搭載のテーブル：auth_user)を検索。
    user = User.objects.get(id=user_id)

    # Todoテーブルに登録。
    todo = Todo.objects.create(
        user_id=user,
        todo=todo,
        appltype=[MODIFIY, DELETE],
        created_date_time=datetime.now(),
        update_date_time=datetime.now()
    )
    return Response({"id": todo.id}, status=status.HTTP_200_OK)
