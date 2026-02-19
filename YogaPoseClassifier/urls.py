from django.urls import path
from . import views

app_name = 'YogaPoseClassifier'

urlpatterns = [
    path('', views.index, name='index'),
    path('api/', views.api_home, name='api_home'),
    path('api/classify/', views.api_classify_pose, name='api_classify_pose'),
    path('api/poses/', views.api_get_poses, name='api_get_poses'),
]