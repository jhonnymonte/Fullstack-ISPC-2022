from django.urls import path
from . import views


urlpatterns = [
    path('index', views.inicio, name= 'inicio'),
    path('contacto/', views.contacto, name= 'contacto'),
    path('bebidas/', views.bebidas, name= 'bebidas'),
    path('almuerzosCenas/', views.almuerzos_cenas, name='almuerzosCenas'),
    path('desayunos/', views.desayunos, name='desayunos'),
    path('guiaalimentacion/', views.guia_alimentacion, name= 'alimentacion'),
    path('postres/', views.postres, name= 'postres'),
    path('recetas/', views.recetas, name= 'recetas'),
    path('sigin/', views.sigin, name= 'sigin'),
    path('usuario/', views.usuario, name= 'usuario'),
    path('planes/', views.planes, name= 'planes'),
    path('registro/', views.registro, name= 'registro'),
    path('monitoreodepeso/', views.monitoreo_de_peso, name= 'monitoreodepeso'),
    path('gestion_turnos/', views.gestion_turnos, name= 'gestion_turnos'),
    ##views de login y registro
    path('register/', views.registerPage, name= 'register'),#register forms django
    path('login/', views.loginPage, name= 'login'),#register forms django
    path('login/', views.logoutUser, name= 'logout')#logout

]