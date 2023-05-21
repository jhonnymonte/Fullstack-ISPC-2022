from .views import RegisterAPI, LoginAPI, UsersViewSet
from knox import views as knox_views
from .views import ChangePasswordView
from django.urls import path, include

urlpatterns = [
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('api/change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('api/password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
    path('api/users/', UsersViewSet.as_view({'get': 'list', 'post': 'create'}), name='users'),
    path('api/users/<int:pk>/', UsersViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='user-detalle'),
]
