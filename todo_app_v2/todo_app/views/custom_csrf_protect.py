from functools import wraps
from django.middleware.csrf import get_token
from django.http import JsonResponse


def custom_csrf_protect(view_func):
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        # CSRFトークンの取得
        csrf_token = get_token(request)

        # リクエストメソッドがPOSTの場合のみ検証を行う
        if request.method == 'POST':
            # リクエストヘッダーからCSRFトークンを取得
            request_csrf_token = request.headers.get('X-CSRFToken')

            # リクエストヘッダーにCSRFトークンが含まれていない場合、またはトークンが一致しない場合は403エラーを返す
            if not request_csrf_token or request_csrf_token != csrf_token:
                return JsonResponse({'error': 'CSRFトークンが不正です。'}, status=403)

        # ビュー関数の呼び出し
        return view_func(request, *args, **kwargs)

    return _wrapped_view
