from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from todo_app.models import Todo
from django.contrib.auth.models import User


@api_view(["POST"])
def post(request):
    """
    特定のtodoを更新

    Args
        todo_id: Todoテーブルのid
        user_id: Userテーブル(Django標準搭載のテーブル:auth_user)のid
        todo: Todoテーブルのtodo

    Return
        id: Todoテーブルのid
    """
    # TODO:シリアライザでのバリデーションを追加。
    todo_id = request.data.get("todo_id")
    user_id = request.data.get("user_id")
    todo = request.data.get("todo")

    try:
        # Userテーブルを検索。
        user = User.objects.get(id=user_id, del_flg=False)

        # Todoテーブルを検索。
        get_todo = Todo.objects.get(id=todo_id, user_id=user.id, del_flg=False)
        # todoを更新。
        get_todo.todo = todo
        get_todo.save()
    except Exception:
        return Response({"error_flg": True}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response({"id": get_todo.id, "error_flg": False}, status=status.HTTP_200_OK)
