from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from .models import *
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

def registros (request):
    if request.method == 'POST':
        miFormulario= registroFormulario (request.POST)
        print (miFormulario)

        if miFormulario.is_valid: 
            
            informacion = miFormulario.cleaned_data 

            registros= registro (nombre=informacion ['nombre'], apellido=informacion['apellido'], telefono=informacion['telefono'], email=informacion ['email'], direccion=informacion ['direccion'], ciudad=informacion ['ciudad'],)
            
            registro.save()

            return render (request, "connectsalud/registro.html")

    else:

        miFormulario= registroFormulario()

    return render(request, "connectsalud/registro.html", {'miFormulario':miFormulario})

def leerregistros(request):
    registros = registro.objects.all()
    contexto = {"registro":registros}
    return render(request ,"connectsalud/leerregistros.html",contexto)

def eliminarRegistro(request, registros_nombre):
    registros = registro.objects.get(nombre=registros_nombre)
    registro.delete()

    registros = registro.objects.all()
    contexto= {"registro": registros}

    return render (request,"connectsalud/leerregistros.html", contexto)

def editarRegistro(request, registros_nombre):
    Registro = registro.objects.get(nombre=registros_nombre)

    if request.method == 'POST':
        miFormulario = registroFormulario(request.POST)
        print (miFormulario)
        if miFormulario.is_valid:
            informacion=miFormulario.cleaned_data
            registro.nombre = informacion ['nombre']
            registro.apellido = informacion ['apellido']
            registro.telefono = informacion ['telefono']
            registro.email = informacion ['email']
            registro.direccion = informacion ['direccion']
            registro.ciudad = informacion ['ciudad']
            registro.save()
            return render(request, "connectsalud/index.html")
    else:
        miFormulario = registroFormulario(initial={'nombre':registro.nombre,'apellido':registro.apellido,'telefono':registro.telefono,'email':registro.email,'direccion':registro.dirrecion,'ciudad':registro.ciudad})
    return render(request,"connectsalud/editarRegistro.html",{"miFormulario": miFormulario,"registros_nombre": registros_nombre})





