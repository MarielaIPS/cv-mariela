let fecha = new Date();
let dia = fecha.getDay();

switch(dia){
  case 0 : mensaje = "Que tengas un excelente Domingo";
  break;
 case 1 : mensaje = "Que tengas un excelente Lunes";
  break;
   case 2 : mensaje = "Que tengas un excelente Martes";
  break;
   case 3 : mensaje = "Que tengas un excelente Miercoles";
  break;
   case 4 : mensaje = "Que tengas un excelente Jueves";
  break;
 case 5 : mensaje = "Que tengas un excelente Viernes";
  break;
 case 6 : mensaje = "Que tengas un excelente Sabado";
  break;

}

alert(mensaje)


  
    var nombre= document.getElementById("nombre_contacto");
    var email= document.getElementById("email");
    var texto=document.getElementById("mensaje");
  
    
    function enviarformulario( ){
     
     if(nombre.value === null || nombre.value === ""){
      alert("ingrese su nombre");
      return false
    } 

    if(email.value === null || email.value === ""){
      alert("Ingrese su email ej: juanito@mail.com")
      return false
    }
    
    if(texto.value === null || texto.value === ""){
      alert("Ingrese un mensaje")
      return false
    }
    else{ return true}
     
    }
  