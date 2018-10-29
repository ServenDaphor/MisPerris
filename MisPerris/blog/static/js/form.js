$(window).load(function () {

  
  function validarFormulario(formulario) {
  
    var txtNombre = document.getElementById('nombre').value;
    var txtRut = document.getElementById('rut').value;
    var txtCorreo = document.getElementById('correo').value;
    var txtFecha = document.getElementById('fecha').value;
    var cmbSelector = document.getElementById('selector').selectedIndex;
    var cmbSelector2 = document.getElementById('region').selectedIndex;
    var cmbSelector3 = document.getElementById('ciudad').selectedIndex;
  
  
  
  
    //Test correo
    if (!(/\S+@\S+\.\S+/.test(txtCorreo))) {
      alert('Error: Debe escribir un correo válido.');
      return false;
    }
  
  
    //Test Rut
    if (txtRut == null || txtRut.length == 0 || txtRut.length < 8 || txtRut > 10) {
      alert('Error: Debe ingresar un rut válido.');
      return false;
    } if (txtRut == isNaN) {
      return true;
    }
  
    //Test campo obligatorio
    if (txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)) {
      alert('Error: El campo de nombre no debe ir vacío o lleno de espacios en blanco.');
      return false;
    }
  
    //Test fecha
    if (!isNaN(txtFecha)) {
      alert('Error: Debe proporcionar una fecha.');
      return false;
    }
  
    //Test comboBox
    if (cmbSelector == null || cmbSelector == 0) {
      alert('Error: Debe seleccionar una opción.');
      return false;
    }
  
    //Test comboBox2
    if (cmbSelector2 == null || cmbSelector2 == 0) {
      alert('Error: Debe seleccionar una opción.');
      return false;
    }
  
    //Test comboBox3
    if (cmbSelector3 == null || cmbSelector3 == 0) {
      alert('Error: Debe seleccionar una opción.');
      return false;
    }
  
    return true;
  
}

});