from django.urls import path
from . import views

urlpatterns = [
    path("top_list/", views.top_list.get, name="top_list"),
]
