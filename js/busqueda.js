var entrada = document.getElementsByClassName('entrada')[0];
entrada.value = '';
var resultado = document.getElementsByClassName('objetos')[0];
window.addEventListener('load', iniciar );

  function iniciar(){
    entrada.addEventListener("keyup",mostrar);
  }

  function mostrar(e){
    var valorPeticion = e.target.value.trim();
    if(valorPeticion == ''){
      resultado.innerHTML = '';
      return;
    }else{
      fetch('js/productos.json')
        .then(response => response.json())
        .then(json => mostrar(json)) // peticion del archivo JSON y paso a una función para su procesamiento
        

      function mostrar(respuesta){
        console.log(respuesta)
        var aux = [];
          if(respuesta!=''){
            resultado.innerHTML = '';
            for(var valor in respuesta){
              if(valor.toLowerCase().includes(valorPeticion.toLowerCase())){
                  aux.push(valor);
              }
            }
            if(aux.length==0){
              resultado.innerHTML = 'No hay nada relacionado';
            }else {
              for (var i = 0; i < aux.length; i++) {
                var objeto = respuesta[aux[i]];
                $('div.objetos').append('<div class="producto card">'
                                      + '<img src="img/GAMA_MEDIA/galaxy.jpg" class="img-fluid"/>'
                                      + '<div>'
                                        + '<h3>' + aux[i] + '</h3>'
                                        + '<span>' + objeto.Capacidad + '</span>'
                                        + '<span>' + objeto.Ram + '</span>'
                                        + '<span>' + objeto.Precio + '</span>'
                                        + "<a class='redirigir btn btn-danger mostrarProd'>Mas</a>"
                                      + '</div>');
              }
            }
          }
      }
    }
  }