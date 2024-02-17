from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["POST"])
def post(request):
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
                "message": "Login successful !!",
            },
            status=status.HTTP_200_OK,
        )
    else:
        return Response(
            {"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
        )
