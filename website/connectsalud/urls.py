from django.urls import path
from . import views


urlpatterns = [
    path('inicio', views.inicio),
    path('contacto/', views.contacto, name= 'contacto'),
    path('bebidas/', views.bebidas, name= 'bebidas'),
    path('almuerzocenas/', views.almuerzos_cenas, name='almuerzo'),
    path('desayunos/', views.desayunos, name='desayunos'),
    path('guiaalimentacion/', views.guia_alimentacion, name= 'alimentacion'),
    path('postres/', views.postres, name= 'postres'),
    path('recetas/', views.recetas, name= 'recetas')
]