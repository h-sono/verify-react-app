from django.urls import path
from . import views

urlpatterns = [
    path("todo/login/", views.login.post, name="login"),
    path("get_csrf_token/", views.get_csrf_token.get, name="get_csrf_token"),
    # path("logout/", views.logout.post, name="logout"),
    path("todo/<int:user_id>", views.get_todo_list.get, name="todo_list"),
    path("add_todo/", views.add_todo.post, name="add_todo"),
    path("update_todo/", views.update_todo.post, name="update_todo"),
    path("delete_todo/", views.delete_todo.post, name="delete_todo"),
]
