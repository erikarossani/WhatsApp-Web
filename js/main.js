window.addEventListener("load",function(){
   var mensajes = document.getElementById("mensajes");
   var buscarChat = document.getElementById("buscar");

mensajes.addEventListener("keyup",function(e){
	  e.preventDefault();
      if(e.keyCode == 13)
      AgregarMensaje();

});

   function AgregarMensaje(){
   	   var texto =mensajes.value;
       var chat = document.createElement("div");
           chat.setAttribute("class", "w-message-text")
       var hora = document.createElement("div");
           hora.setAttribute("class", "time");
       var datos= new Date();
       var horas = datos.getHours();
       var minutos = datos.getMinutes();
       var burbuja = document.createElement("div");
           burbuja.setAttribute("class", "w-message w-message-out");

        if(horas < 10){ 
          horas = "0" + horas; 
        }

       if(minutos < 10) {
         minutos = "0" + minutos; 
       }

      hora.textContent = horas + ":" + minutos ;

        chat.innerHTML =texto;

       var contenido = document.getElementById("conversacion");
           contenido.appendChild(burbuja);
           burbuja.appendChild(chat);
	       chat.appendChild(hora);
           document.getElementById("mensajes").value = "";
    }

});