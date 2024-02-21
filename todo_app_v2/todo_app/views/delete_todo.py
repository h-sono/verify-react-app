import logging
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from todo_app.models import Todo
from django.contrib.auth.models import User
# from django.views.decorators.csrf import csrf_protect


@api_view(["POST"])
# @csrf_protect
def post(request):
    """
    特定のtodoを削除

    Args
        todo_id: Todoテーブルのid
        user_id: Userテーブル(Django標準搭載のテーブル:auth_user)のid

    Return
        id: Todoテーブルのid
    """
    logger = logging.getLogger(__name__)

    # TODO:シリアライザでのバリデーションを追加。
    todo_id = request.data.get("todo_id")
    user_id = request.data.get("user_id")

    try:
        # Userテーブルを検索。
        user = User.objects.get(id=user_id)

        # Todoテーブルを検索。
        get_todo = Todo.objects.get(id=todo_id, user_id=user.id, del_flg=False)
        # todoテーブルの削除フラグをTrueに更新(論理削除)。
        get_todo.del_flg = True
        get_todo.save()
    except Exception as e:
        logger.debug("exception details of the delete_todo.py: [%s]", e)
        return Response({"error_flg": True}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response({"id": get_todo.id, "error_flg": False}, status=status.HTTP_200_OK)
