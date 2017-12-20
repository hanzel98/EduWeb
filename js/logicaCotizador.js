//ESTE ARCHIVO ALMACENA AQUEL CÓDIGO QUE USA EL ARCHIVO serviciosProductos.html para
//LAS FUNCIONES JAVASCRIPTS.

function AlertaCursoAñadido(){
  alert("Curso Añadido");
}//function ENDS

var arregloCursos = recuperarDatosAlmacenados();

function recuperarDatosAlmacenados(){
  var arregloCursosAlmacenado = JSON.parse(localStorage.getItem('curso'));
  if (arregloCursosAlmacenado == null) {
    return [];
  } else {
    return arregloCursosAlmacenado;
  }//else ENDS
}//function ENDS

function agregarCurso(pNombre, pPrecio, pBotonID){
  AlertaCursoAñadido();
  var curso = {nombre:pNombre, precio:pPrecio, botonID:pBotonID};
  arregloCursos.push(curso);
  localStorage.setItem('curso', JSON.stringify(arregloCursos));
}//function ENDS

function desactivarBoton(pBoton) {
  var boton = document.getElementById(pBoton);
  boton.disabled = true;
  localStorage.setItem(pBoton, true);
}//function ENDS
