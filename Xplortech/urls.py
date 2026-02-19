from django.urls import path
from . import views

app_name = 'Xplortech'

urlpatterns = [
    path('', views.index, name='index'),
    path('api/', views.api_home, name='api_home'),
    path('api/scholarships/', views.api_scholarships, name='api_scholarships'),
    path('api/scholarships/<int:pk>/', views.api_scholarship_detail, name='api_scholarship_detail'),
]