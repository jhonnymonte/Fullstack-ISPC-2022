import email
from django.db import models

# Create your models here.

"""
este codigo corresponde al los models, donde se van a crear las base de datos de la web 
que en una idea inicial son las siguientes con varias a definir sobre el resto del proceso

Reserva de turnos 
CRUD de usuarios 
"""

#ejemplo de creacion de model de usuarios
class Usuarios(models.Model):
    nombre = models.CharField(max_length = 30)
    apellido = models.CharField(max_length = 30)
    email = models.EmailField()
    edad = models.IntegerField()
