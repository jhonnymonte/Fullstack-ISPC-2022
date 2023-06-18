from .views import ListUser, RegisterAPI, LoginAPI, UserDetailAPIView, CitasViewSet
from knox import views as knox_views
from django.urls import path

urlpatterns = [
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/citas/', CitasViewSet.as_view({'get': 'list', 'post': 'create'}), name='citas'),
    path('api/citas/<int:pk>/', CitasViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='citas-detalle'),
    path('api/listusers/', ListUser.as_view(), name='user-list'),
    path('api/listusers/<int:pk>/', ListUser.as_view(), name='user-detail-list'),
    path('api/user/', UserDetailAPIView.as_view(), name='user-detail'),
]
