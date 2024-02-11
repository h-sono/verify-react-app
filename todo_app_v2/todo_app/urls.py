from django.urls import path
from . import views

urlpatterns = [
    path("todo/", views.get_todo_list.get, name="todo_list"),
]
