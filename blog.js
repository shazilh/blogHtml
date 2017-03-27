var cambios=" ";
function clonarTexto(){
      var itm= document.getElementById("textoEscrito").lastChild;
      var cln = itm.cloneNode(true);
      var para5=document.getElementById("previoTexto");
      para5.insertBefore(cln,para5.childNodes[1]);
}

function mostrar(){
  var texto=document.getElementById("textoEscrito").value;
  document.getElementById("previoTexto").innerHTML=texto;

}
function enviar(){
  var texto=document.getElementById("previoTexto").innerHTML;
  document.getElementById("textoEnviar").innerHTML=texto;

  }

function hacerTextoGrande(){
  document.getElementById("previoTexto").style.fontSize="45px";
   guardarCambios()
}

function hacerTextoMediano(){
  document.getElementById("previoTexto").style.fontSize="30px";
}

function hacerTextoChico(){
  document.getElementById("previoTexto").style.fontSize="15px";
}

function alinearIzquierda(){
  document.getElementById("previoTexto").style.textAlign="left";
}
function centrar(){
  document.getElementById("previoTexto").style.textAlign="center";
}
function alinearDerecha(){
  document.getElementById("previoTexto").style.textAlign="right"
}
function colorLetras(){
  var mensaje=prompt("Ingresa el código de tu color para color de letras");
  document.getElementById("previoTexto").style.color=mensaje;
}
function colorFondo(){
  var mensaje2=prompt("Ingresa el código de tu color para color de fondo");
  document.getElementById("previoTexto").style.background=mensaje2;
}
function borrar(){
  var mensaje3=prompt("Desea borrar el comentario actual?");
    if(mensaje3=="si"){
      var texto=document.getElementById("textoEscrito").value;
      document.getElementById("previoTexto").innerHTML=" ";
      document.getElementById("textoEnviar").innerHTML=" ";
      //document.getElementById("textoEscrito").innerHTML=" ";

    }else if(mensaje3=="no"){
      var texto=document.getElementById("textoEscrito").value;
      document.getElementById("previoTexto").innerHTML=texto;
    }
  }
  function agregarLi(){
    var mensaje=prompt("Cuantos items deseas agregar?");
    var numero=mensaje;
        for(i=0; i<=numero.length;i++){
        var texto=document.getElementById('previoTexto').value;
        var mensajePrompt=prompt("Ingresa a la lista")
        var li=document.createElement('LI');
        li.innerHTML=mensajePrompt==''?'(nada)':mensajePrompt;
        document.getElementById('lista').appendChild(li);
      }

}

/*function colores(){
        $(".colores").spectrum({
            color: "#f00",
            showPalette: true,
            palette: [
                ['black', 'white', 'blanchedalmond'],
                ['rgb(255, 128, 0);', 'hsv 100 70 50', 'lightyellow']
            ],
            change: function(color) {
                //alert(color.toHexString());
                $('body.id="previoTexto"').css("background-color",color.toHexString());

            }
        });
}
*/
