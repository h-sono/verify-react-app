from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import logout

@api_view(['GET'])
def get(request):
    try:
        logout(request)
    except Exception:
        return Response({"logout_flg": False}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response({"logout_flg": True}, status=status.HTTP_200_OK)
