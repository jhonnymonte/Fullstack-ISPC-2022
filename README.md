# Fullstack-ISPC-2022

pasos para la correcta conexion del proyecto

una vez clonado el respositorio necesitamos crear un entorno virtual para instalar django y correr el proyecto dentro del mismo.
sin entorno virtual django no funciona

en la terminal escribimos.
instalamos una libreria para instalacion de entorno virtual

pip install pipenv
creamos y activamos el entorno virtual

pipenv shell

una vez creado el entorno virtual 

ejecutamos 

pipenv install django.

nos posicionamos dentro del directorio donde se encuentra el archivo manage.py
y ejecutamos

python manage.py runserver

una vez iniciado el servidor
podemos correr el proyecto desde google chrome en la siguiente direccion

http://127.0.0.1:8000/

ya no se usa live server


