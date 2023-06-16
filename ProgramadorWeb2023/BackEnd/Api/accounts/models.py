from django.db import models
from datetime import datetime

# Create your models here.

# Api Citas

class Citas(models.Model):
    id_paciente = models.AutoField(primary_key=True)
    dni = models.CharField(max_length=8, null=False, default='DEFAULT_VALUE')
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    telefono = models.CharField(max_length=10)
    correo = models.CharField(max_length=50)
    fecha = models.DateField()
    hora = models.TimeField(null=False, default=datetime.now().time())
    mensaje = models.CharField(max_length=50)
    fecha_registro = models.DateField(auto_now=True)

class Meta:
    db_table = "user"

def __str__(self):
    if self.nombre==None:
        return "No hay nombre"
    return self.nombre


# Api Usuarios
class ListUser(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateField(auto_now=True)
    last_login = models.DateField(auto_now=True)

    def __str__(self):
        return self.name
