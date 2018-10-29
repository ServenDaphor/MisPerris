from django.conf.urls import include, url
from blog import views

urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'^form/', views.form, name = 'form'),
    url(r'^perros/', views.perros, name = 'perros'),
]