alert("hoala");

function compruebaEmail(){
  var email = document.getElementById("Correo").value;
  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if ( !expr.test(email) ){
        alert("Introduzca un correo valido");
      }
}
