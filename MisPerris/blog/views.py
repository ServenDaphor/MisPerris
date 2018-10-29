from django.shortcuts import render
from django.utils import timezone
from .models import Perro

def index(request):
    forms = Perro.objects.all()
    return render(request, 'blog/index.html', {'forms':forms})

def form(request):
    return render(request, 'blog/form.html', {})

def perros(request):
    forms = Perro.objects.all()
    return render(request, 'blog/perros.html', {'forms':forms})