from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import ensure_csrf_cookie

# セッションごとに新しいcsrfトークンを生成(cookieにcsrftokenというキーでセットされる)


@api_view(["GET"])
@ensure_csrf_cookie
def get(request):
    return Response({"success": "CSRF cookie set"})
