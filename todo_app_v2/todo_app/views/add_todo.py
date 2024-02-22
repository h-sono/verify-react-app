import logging
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from todo_app.models import Todo
from todo_app.const.appl_type import MODIFIY, DELETE
from datetime import datetime
from django.contrib.auth.models import User
# from django.views.decorators.csrf import csrf_protect


# TODO:CSRFトークン検証を一時的に停止中
@api_view(["POST"])
# @csrf_protect
def post(request):
    """
    todoを新規追加

    Args
        user_id: Userテーブル(Django標準搭載のテーブル:auth_user)のid
        todo: Todoテーブルのtodo

    Return
        id: Todoテーブルのid
    """
    logger = logging.getLogger(__name__)

    # TODO:シリアライザでのバリデーションを追加。
    user_id = request.data.get("user_id")
    todo = request.data.get("todo")

    try:
        # Userテーブルを検索。
        user = User.objects.get(id=user_id)

        # Todoテーブルに登録。
        todo = Todo.objects.create(
            user_id=user,
            todo=todo,
            appltype=[MODIFIY, DELETE],
            created_date_time=datetime.now(),
            update_date_time=datetime.now()
        )
    except Exception as e:
        logger.debug("exception details of the add_todo.py: [%s]", e)
        return Response({"error_flg": True}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response({"id": todo.id, "error_flg": False}, status=status.HTTP_200_OK)
