
//ESTE ARCHIVO ALMACENA AQUEL CÓDIGO QUE USA EL ARCHIVO serviciosProductos.html para
//LAS FUNCIONES JAVASCRIPTS.

function AlertaCursoAñadido(){
  alert("Curso Añadido");
}

var arregloCursos = recuperarDatosAlmacenados();

function recuperarDatosAlmacenados(){
  var arregloCursosAlmacenado = JSON.parse(localStorage.getItem('curso'));
  if (arregloCursosAlmacenado == null) {
    return [];
  } else {
    return arregloCursosAlmacenado;
  }
}

function agregarCurso(pNombre, pPrecio){
  AlertaCursoAñadido();
  alert(arregloCursos);
  var curso = {nombre:pNombre, precio:pPrecio};
  arregloCursos.push(curso);

  localStorage.setItem('curso', JSON.stringify(arregloCursos))
}
