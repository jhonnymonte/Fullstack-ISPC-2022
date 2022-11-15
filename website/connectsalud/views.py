from django.shortcuts import render, redirect
from .models import Alta_turnos
# import de login/register
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import CreateUserForm
from django.contrib.auth import authenticate,login,logout
"""
en codigo se crean las views para cada pagina del sitio y sus respectivas funcionalidades, conectandose al models para y enviando la informacion a los templates
"""

def inicio(request):
    return render(request, "index.html")

def contacto(request):
    return render(request, "contacto.html")

@login_required(login_url='login')
def bebidas(request):
    return render(request, "bebidas.html")

@login_required(login_url='login')
def almuerzos_cenas(request):
    return render(request, 'almuerzosCenas.html')

@login_required(login_url='login')
def desayunos(request):
    return render(request, "desayunos.html")

@login_required(login_url='login')
def guia_alimentacion(request):
    return render(request, "guiaalimentacion.html")

@login_required(login_url='login')
def postres(request):
    return render(request,"postres.html")

@login_required(login_url='login')
def recetas(request):
    return render(request,"recetas.html")

def usuario(request):
    return render(request,"usuario.html")

def planes(request):
    return render(request,"planes.html")
@login_required(login_url='login')

def monitoreo_de_peso(request):
    return render(request,"monitoreodepeso.html")

@login_required(login_url='login')
def gestion_turnos(request):
    return render(request, "gestion_turnos.html")


## CRUD turnos

def home(request):
    turnos = Alta_turnos.objects.all()


    return render(request, "gestion_turnos.html",{"turnos":turnos})

def registrar_turno(request):
    dni = request.POST['txtDni']
    nombre = request.POST['txtNombre']
    apellido = request.POST['txtApellido']
    telefono = request.POST['txtTelefono']
    email = request.POST['txtEmail']
    fecha = request.POST['txtFecha']
    hora = request.POST['txtHora']
    mensaje= request.POST['txtMensaje']

    turno = Alta_turnos.objects.create(dni = dni, Nombre = nombre, apellido = apellido, telefono = telefono, email = email, fecha = fecha, hora = hora, mensaje = mensaje)
    return redirect('/')

def eliminar_turno(request, dni):
    turnos = Alta_turnos.objects.get(dni=dni)
    turnos.delete()
    return redirect('/')

def edicion_turno(request, dni):
    turnos = Alta_turnos.objects.get(dni=dni)
    return render(request, 'edicion_turnos.html', {"turnos":turnos})

def editar_turno(request):
    dni = request.POST['txtDni']
    nombre = request.POST['txtNombre']
    apellido = request.POST['txtApellido']
    telefono = request.POST['txtTelefono']
    email = request.POST['txtEmail']
    fecha = request.POST['txtFecha']
    hora = request.POST['txtHora']
    mensaje= request.POST['txtMensaje']

    turnos = Alta_turnos.objects.get(dni=dni)
    turnos.Nombre = nombre
    turnos.apellido = apellido
    turnos.telefono = telefono
    turnos.email = email
    turnos.fecha = fecha
    turnos.hora = hora
    turnos.mensaje = mensaje
    turnos.save()

    return redirect('/')

##login y registro

def registerPage(request):
    if request.user.is_authenticated:
        return redirect('inicio')
    
    else:
        form = CreateUserForm
        if request.method == 'POST':
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                user = form.cleaned_data.get('username')
                messages.success(request,f'El usuario {user} fue creado correctamente')
                return redirect('login')

        context = {'form': form}
        return render(request, 'register.html', context)

def loginPage(request):
    if request.user.is_authenticated:
        return redirect('inicio')
    else:

        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request, username = username, password = password )

            if user is not None:
                login(request, user)
                return redirect('inicio')
            
            else:
                messages.info(request, ' Usuario o contraseña incorrecto')
                context = {}
                return render(request, 'login.html', context)        

        context = {}
        return render(request, 'login.html', context)


def logoutUser(request):
    logout(request)
    return redirect('login')