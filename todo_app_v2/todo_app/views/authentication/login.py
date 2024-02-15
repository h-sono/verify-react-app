from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate

@api_view(['POST'])
def post(request):
    # TODO:シリアライザでのバリデーションを追加。
    username = request.data.get('username')
    password = request.data.get('password')
    # ベーシック認証を実行。デフォルト設定でUserテーブル(auth_user)を参照している。
    user = authenticate(request, username=username, password=password)
    if user:
        return Response({'message': 'Login successful !!'}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
