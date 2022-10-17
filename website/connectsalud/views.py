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

