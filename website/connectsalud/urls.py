from django.urls import path
from . import views


urlpatterns = [
    path('', views.inicio, name= 'inicio'),
    path('index/', views.inicio, name= 'inicio'),
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
    path('monitoreodepeso', views.monitoreo_de_peso , name='monitoreo'),
    path('registrarTurno/', views.registrar_turno, name = 'registrar_turno'),
    path('edicionTurno/<dni>', views.edicion_turno, name = 'edicion_turno'),
    path('editarTurno/', views.editar_turno, name = 'editar_turno'),
    path('eliminarTurno/<dni>', views.eliminar_turno, name= 'eliminar turno'),
]