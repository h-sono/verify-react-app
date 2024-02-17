from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from todo_app.models import Todo
from django.contrib.auth.models import User


@api_view(["POST"])
def post(request):
    """
    特定のtodoを削除

    Args
        todo_id: Todoテーブルのid
        user_id: Userテーブル(Django標準搭載のテーブル:auth_user)のid

    Return
        id: Todoテーブルのid
    """
    # TODO:シリアライザでのバリデーションを追加。
    todo_id = request.data.get("todo_id")
    user_id = request.data.get("user_id")

    # Userテーブルを検索。
    user = User.objects.get(id=user_id)

    # Todoテーブルを検索。
    get_todo = Todo.objects.get(id=todo_id, user_id=user.id)
    # todoテーブルの削除フラグをTrueに更新(論理削除)。
    get_todo.del_flg = True
    get_todo.save()

    return Response({"id": get_todo.id}, status=status.HTTP_200_OK)
