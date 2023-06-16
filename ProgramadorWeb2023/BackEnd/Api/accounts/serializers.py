from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Citas
from django.contrib.auth import get_user_model

User = get_user_model()


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user

# Api Citas

from accounts.models import Citas

class CitasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Citas
        fields = ['id_paciente','dni', 'nombre', 'apellido', 'telefono', 'correo', 'fecha', 'hora', 'mensaje', 'fecha_registro']

# Lista de Usuarios 

class ListUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_superuser', 'is_staff', 'date_joined', 'last_login']

# Perfil de Usuario

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name']