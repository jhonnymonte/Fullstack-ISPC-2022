from django.contrib import admin
from .models import Citas

# Register your models here.

# Api Citas

class UserAdmin(admin.ModelAdmin):
    list_display = ('id_paciente', 'dni','nombre', 'apellido', 'telefono', 'correo', 'fecha', 'hora' , 'mensaje', 'fecha_registro')
    search_fields = ['nombre', 'apellidos', 'correo', 'telefono']
    list_filter = ['fecha_registro', 'sexo']
    list_per_page = 10

admin.site.register(Citas)

