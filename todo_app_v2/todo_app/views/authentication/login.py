import logging
from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_protect
from todo_app.const import code

@csrf_protect
@api_view(["POST"])
def post(request):
    logger = logging.getLogger(__name__)

    # TODO:シリアライザでのバリデーションを追加。
    username = request.data.get("username")
    password = request.data.get("password")
    # ベーシック認証を実行。デフォルト設定でUserテーブル(auth_user)を参照している。
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return Response(
            {
                "user_id": user.id,
                "user_name": username,
                "login_flg": True,
                "code": ""
            },
            status=status.HTTP_200_OK,
        )
    else:
        logger.debug("failed login!")
        return Response(
            {"login_flg": False, "code": code.E00001}, status=status.HTTP_401_UNAUTHORIZED
        )
