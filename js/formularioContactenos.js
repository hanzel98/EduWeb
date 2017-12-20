function compruebaEmail(){
  var email = document.getElementById("exampleInputEmail").value;
  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if ( !expr.test(email) ){
        alert("Introduzca un correo valido");
      }
}

function EncuentraEmail(){
  var email = document.getElementById("exampleInputEmail").value;
  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if ( !expr.test(email) ){
      alert("Introduzca un correo valido");

      return false;
    }else{
      return true;
    }

}

function compruebaEspacios(){
var Nombre= document.getElementById("inputDefault").value;
var Correo= document.getElementById("exampleInputEmail").value;
var Mensaje= document.getElementById("exampleTextarea").value;
var HayEspacioVacio= false;
  document.getElementById("LleneEspacios").innerHTML="";
  if(Nombre==""){
    document.getElementById("LleneEspacios").innerHTML+="* Llene el Nombre <br>";
    HayEspacioVacio= true;
  }if(Correo==""){
    document.getElementById("LleneEspacios").innerHTML+="* Llene el Correo <br>";
    HayEspacioVacio= true;
  } if(Correo!="" && !EncuentraEmail()){
    HayEspacioVacio= true;
  } if(Mensaje==""){
    document.getElementById("LleneEspacios").innerHTML+="* Llene el Mensaje <br>";
    HayEspacioVacio= true;
  }
if(HayEspacioVacio==false){
  email();
}
}

function email(){
 var Nombre= document.getElementById("inputDefault").value;
 var Correo= document.getElementById("exampleInputEmail").value;
 var Mensaje= document.getElementById("exampleTextarea").value;
  Mensaje= "Nombre: "+Nombre+"\r\n"+Mensaje;
  Mensaje = encodeURIComponent(Mensaje);
 window.location='mailto: EduWeb@gmail.com?subject=mensajeConsultaEduWeb' + '&body='+Mensaje;
}
