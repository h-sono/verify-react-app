from django.urls import path
from . import views

urlpatterns = [
    path("login/", views.login.post, name="login"),
    path("todo/", views.get_todo_list.get, name="todo_list"),
]
