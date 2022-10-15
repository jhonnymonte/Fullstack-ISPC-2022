from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
# Create your views here.
"""
en codigo se crean las views para cada pagina del sitio y sus respectivas funcionalidades, conectandose al models para y enviando la informacion a los templates
"""

def inicio(request):
    
    return render(request, "index.html")
    