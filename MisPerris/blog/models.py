from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext as _
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Permission
from django.utils import timezone
from django.db.models.signals import post_delete
from django.dispatch import receiver

class Perro(models.Model):
    imagen = models.ImageField(blank = True)
    thumbnail = models.ImageField(blank = True)
    nombre = models.CharField(max_length = 50)
    raza = models.CharField(max_length = 50)
    descripcion = models.CharField(max_length = 100, default = 'Null')
    
    ESTADO = (
        ('disponible', 'Disponible'),
        ('adoptado', 'Adoptado'),
        ('rescatado', 'Rescatado'),
    )
    estado = models.TextField(choices = ESTADO)

class Postulante(models.Model):
    correo = models.EmailField(max_length = 50)
    nombre = models.CharField(max_length = 50)
    rut = models.CharField(max_length = 50)
    nacimiento = models.DateField()
    
    REGION = (
        ('estado_1', 'I Tarapaca'),
        ('estado_2', 'II Antofagasta'),
        ('estado_3', 'III Atacama'),
        ('estado_4', 'IV Coquimbo'),
        ('estado_5', 'V Valparaiso'),
        ('estado_6', 'VI Ohiggins'),
        ('estado_7', 'VII Maule'),
        ('estado_8', 'VIII Bio Bio'),
        ('estado_9', 'IX Araucania'),
        ('estado_10', 'X Los Lagos'),
        ('estado_11', 'XI Aisen'),
        ('estado_12', 'XII Magallanes y Antartica'),
        ('estado_13', 'XII Metropolitana'),
        ('estado_14', 'IVX Los Rios'),
        ('estado_15', 'XV Arica y Parinacota'),
    )
    region = models.CharField(max_length = 25, choices = REGION, default = 'region')

    CIUDAD = (
        ('1', 'Arica'),
        ('2', 'Alto Hospicio'),
        ('3', 'Iquique'),
        ('4', 'Pozo Almonte'),
        ('5', 'Caldera'),
        ('6', 'Chanaral'),
        ('7', 'Copiapo'),
        ('8', 'Diego de Almagro'),
        ('9', 'El Salvador    Huasco'),
        ('10', 'Tierra Amarilla'),
        ('11', 'Vallenar'),
        ('12', 'Andacollo'),
        ('13', 'Combarbala'),
        ('14', 'Coquimbo'),
        ('15', 'El Palqui'),
        ('16', 'Illapel'),
        ('17', 'La Serena'),
        ('18', 'Los Vilos'),
        ('19', 'Montepatria'),
        ('20', 'Ovalle'),
        ('21', 'Salamanca'),
        ('22', 'Vicuna'),
        ('23', 'Algarrobo'),
        ('24', 'Cabildo'),
        ('25', 'Calle Larga'),
        ('26', 'Cartagena'),
        ('27', 'Quilpue'),
        ('28', 'Valparaiso'),
        ('29', 'Villa Alemana'),
    )
    cuidad = models.CharField(max_length = 25, choices = CIUDAD, default = 'ciudad')

    VIVIENDA = (
        ('casa_1', 'Casa de patio grande'),
        ('casa_2', 'Casa de patio pequeño'),
        ('casa_3', 'Casa sin patio'),
        ('casa_4', 'Departamento'),
    )
    vivienda = models.CharField(max_length = 25, choices = VIVIENDA, default = 'vivienda')


""" Para borrar de /media/ las fotos que no son usadas por ninguna clase """
@receiver(post_delete, sender=Perro)
def submission_delete(sender, instance, **kwargs):
    instance.imagen.delete(False)