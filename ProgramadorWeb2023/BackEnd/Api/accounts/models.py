from django.db import models

# Create your models here.

from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail  


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    email_plaintext_message = "{}?token={}".format(reverse('password_reset:reset-password-request'), reset_password_token.key)

    send_mail(
        # title:
        "Password Reset for {title}".format(title="Some website title"),
        # message:
        email_plaintext_message,
        # from:
        "noreply@somehost.local",
        # to:
        [reset_password_token.user.email]
    )

# Api Citas

from datetime import datetime

# Create your models here.

class Users(models.Model):
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

