from rest_framework.response import Response
from rest_framework.decorators import api_view


# 関数ベースviewなので@api_viewを使用。
@api_view(["GET"])
def get(request):
    """ Todo一覧取得 """
    return Response({"top_list": {"test": "テストAPIレスポンス2"}})
