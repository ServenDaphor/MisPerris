//1) Definir Variables 
var ciudad_1 = new Array("Arica");
var ciudad_2 = new Array("Alto Hospicio", "Iquique", "Pozo Almonte");
var ciudad_3 = new Array("Caldera", "Chanaral", "Copiapo", "Diego de Almagro", "El Salvador", "Huasco", "Tierra Amarilla", "Vallenar");
var ciudad_4 = new Array("Andacollo", "Combarbala", "Coquimbo", "El Palqui", "Illapel", "La Serena", "Los Vilos", "Montepatria", "Ovalle", "Salamanca", "Vicuna");
var ciudad_5 = new Array("Algarrobo", "Cabildo", "Calle Larga", "Cartagena", "Casablanca", "Catemu", "Concon", "El Melon", "El Quisco", "El Tabo", "Hijuelas", "La Calera", "La Cruz", "La Ligua", "Las Ventanas", "Limache", "Llaillay", "Los Andes", "Nogales", "Olmue", "Placilla de Penuelas", "Putaendo", "Quillota", "Quilpue", "Quintero", "Rinconada", "San Antonio", "San Esteban", "San Felipe", "Santa Maria", "Santo Domingo", "Valparaiso", "Villa Alemana", "Villa Los Almendros", "Vina del Mar");
var ciudad_6 = new Array("Chimbarongo", "Codegua", "Donihue", "Graneros", "Gultro", "Las Cabras", "Lo Miranda", "Machali", "Nancagua", "Palmilla", "Peumo", "Pichilemu", "Punta Diamante", "Quinta de Tilcoco", "Rancagua", "Rengo", "Requinoa", "San Fernando", "San Francisco de Mostazal", "San Vicente de Tagua Tagua", "Santa Cruz");
var ciudad_7 = new Array("Cauquenes", "Constitucion", "Curico", "Hualane", "Linares", "Longavi", "Molina", "Parral", "San Clemente", "San Javier", "Talca", "Teno", "Villa Alegre");
var ciudad_8 = new Array("Arauco", "Bulnes", "Cabrero", "Canete", "Chiguayante", "Chillan", "Chillan Viejo", "Coelemu", "Coihueco", "Concepcion", "Conurbacion La Laja-San Rosendo", "Coronel", "Curanilahue", "Hualpen", "Hualqui", "Huepil", "Lebu", "Los alamos", "Los angeles", "Lota", "Monte aguila", "Mulchen", "Nacimiento", "Penco", "Quillon", "Quirihue", "San Carlos", "San Pedro de la Paz", "Santa Barbara", "Santa Juana", "Talcahuano", "Tome", "Yumbel", "Yungay");
var ciudad_9 = new Array("Angol", "Carahue", "Collipulli", "Cunco", "Curacautin", "Freire", "Gorbea", "Labranza", "Lautaro", "Loncoche", "Nueva Imperial", "Padre Las Casas", "Pitrufquen", "Pucon", "Puren", "Renaico", "Temuco", "Traiguen", "Victoria", "Villarrica");
var ciudad_10 = new Array("Futrono", "La Union", "Lanco", "Los Lagos", "Paillaco", "Panguipulli", "Rio Bueno", "San Jose de la Mariquina", "Valdivia");
var ciudad_11 = new Array("Coihaique", "Puerto Aisen");
var ciudad_12 = new Array("Punta Arenas", "Puerto Natales");
var ciudad_14 = new Array("Ancud", "Calbuco", "Castro", "Fresia", "Frutillar", "Llanquihue", "Los Muermos", "Osorno", "Puerto Montt", "Puerto Varas", "Purranque", "Quellon", "Rio Negro");
var ciudad_15 = new Array("Antofagasta", "Calama", "Maria Elena", "Mejillones", "Taltal", "Tocopilla");
var ciudad_13 = new Array("Alto Jahuel", "Bajos de San Agustin", "Batuco", "Buin", "Cerrillos", "Cerro Navia", "Colina", "Conchali", "Curacavi", "El Bosque", "El Monte", "Estacion Central", "Hospital", "Huechuraba", "Independencia", "Isla de Maipo", "La Cisterna", "La Florida", "La Granja", "La Islita", "La Pintana", "La Reina", "Lampa", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipu", "Melipilla", "Nunoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", "Penaflor", "Penalolen", "Pirque", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquin", "San Jose de Maipo", "San Miguel", "San Ramon", "Santiago", "Talagante", "Tiltil", "Vitacura");



// 2) funcion 

function cambio() {
  var region;
  //Se toma el vamlor de la "region seleccionada"
  region = document.formulario.region[document.formulario.region.selectedIndex].value;
  //se chequea si la "region" esta definida
  if (region != 0) {
    //selecionamos las ciudades Correctas
    mis_ciudades = eval("ciudad_" + region);
    //se calcula el numero de ciudades
    num_ciudades = mis_ciudades.length;
    //marco el numero de ciudad en el select
    document.formulario.ciudad.length = num_ciudades;
    //para cada region del array, la pongo en el select
    for (i = 0; i < num_ciudades; i++) {
      document.formulario.ciudad.options[i].value = mis_ciudades[i];
      document.formulario.ciudad.options[i].text = mis_ciudades[i];
    }
  } else {
    //si no habia ninguna opt seleccionada, elimino las cosas del select
    document.formulario.ciudad.length = 1;
    //ponemos un guion en la unica opt que he dejado
    document.formulario.ciudad.options[0].value = "-";
    document.formulario.ciudad.options[0].text = "-";
  }
  //hacer un reset de las opts
  document.formulario.ciudad.options[0].selected = true;


}