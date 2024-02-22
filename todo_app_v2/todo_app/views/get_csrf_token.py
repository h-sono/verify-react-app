from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token

# セッションごとに新しいcsrfトークンを生成(cookieにcsrftokenというキーでセットされる)
@api_view(["GET"])
@ensure_csrf_cookie
def get(request):
    return Response({"success": "CSRF cookie set"})

# @api_view(["GET"])
# def get(request):
#     return Response({"token": get_token(request)})

