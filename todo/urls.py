from django.urls import path
from todo import views

urlpatterns = [
    path('', views.Home, name="Home"),
    path('task-list/', views.TaskList, name="task-list"),
    path('task-detail/<str:pk>', views.TaskDetail, name="task-detail"),
    path('task-create', views.TaskCreate, name="task-create"),
    path('task-update/<str:pk>', views.TaskUpdate, name="task-update"),
    path('task-delete/<str:pk>', views.TaskDelete, name="task-delete"),
]
