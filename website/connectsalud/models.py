import email
from django.db import models
from django import forms

# Create your models here.

"""
este codigo corresponde al los models, donde se van a crear las base de datos de la web 
que en una idea inicial son las siguientes con varias a definir sobre el resto del proceso

Reserva de turnos 
CRUD de usuarios 
"""

#ejemplo de creacion de model de usuarios
class usuario(models.Model):
    nombre = models.CharField(max_length = 30)
    apellido = models.CharField(max_length = 30)
    email = models.EmailField()
    edad = models.IntegerField()

class registro(models.Model):
    nombre = models.CharField(max_length = 30)
    apellido = models.CharField(max_length = 30)
    telefono = models.CharField(max_length = 30)
    email = models.EmailField()
    direccion = models.CharField(max_length = 30)
    ciudad = models.CharField(max_length = 30)

class monitoreodepeso(models.Model):
    email = models.EmailField()
    nombre = models.CharField(max_length = 30)
    apellido = models.CharField(max_length=30)
    fecha = models.DateField()
    pesoinicial = models.CharField(max_length = 30)
    fecha = models.CharField(max_length = 30)
    pesoactual= models.CharField(max_length = 30)
    fecha = models.CharField(max_length = 30)
    pesodeseado= models.CharField(max_length = 30)
    fecha= models.CharField(max_length = 30)

class turnos (models.Model):
    dni = models.CharField(max_length = 30)
    nombre = models.CharField(max_length = 30)
    apellido = models.CharField(max_length=30)
    telefono = models.CharField(max_length = 30)
    email = models.EmailField(max_length = 30)
    fecha = models.CharField(max_length = 30)
    hora = models.CharField(max_length = 30)
    mensaje = models.CharField(max_length = 30)

class contacto (models.Model):
    nombre = models.CharField(max_length = 30)
    apellido = models.CharField(max_length=30)
    telefono = models.CharField(max_length = 30)
    email = models.EmailField(max_length = 30)
    asunto = models.CharField(max_length = 30)
    mensaje = models.CharField(max_length = 30)

class sigin (models.Model):
    email = models.EmailField()
    contraseña = models.CharField(max_length = 30)


class registroFormulario(forms.Form):
    nombre= forms.CharField(max_length=30)
    apellido= forms.CharField(max_length=30)
    telefono= forms.CharField(max_length=30)
    email= forms.EmailField()
    direccion= forms.CharField(max_length=30)
    ciudad= forms.CharField(max_length=30)
    edad = models.IntegerField()
