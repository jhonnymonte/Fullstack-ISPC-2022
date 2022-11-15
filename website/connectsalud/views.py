from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
# Create your views here.
"""
en codigo se crean las views para cada pagina del sitio y sus respectivas funcionalidades, conectandose al models para y enviando la informacion a los templates
"""

def inicio(request):
    return render(request, "index.html")

def contacto(request):
    return render(request, "contacto.html")
    
def bebidas(request):
    return render(request, "bebidas.html")

def almuerzos_cenas(request):
    return render(request, 'almuerzosCenas.html')

def desayunos(request):
    return render(request, "desayunos.html")

def guia_alimentacion(request):
    return render(request, "guiaalimentacion.html")

def postres(request):
    return render(request,"postres.html")

def recetas(request):
    return render(request,"recetas.html")

def sigin(request):
    return render(request,"sigin.html")

def usuario(request):
    return render(request,"usuario.html")

def planes(request):
    return render(request,"planes.html")

def monitoreo_de_peso(request):
    return render(request,"monitoreodepeso.html")

def registro(request):
    return render(request, "registro.html")

def gestion_turnos(request):
    return render(request, "gestion_turnos.html")




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