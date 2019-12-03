lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {
            /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
  //----------------------CODIGO DE ACA PARA ABAJO AGRAGADO--------------------
    var input1=document.getElementById("direccion");
    var input2=document.getElementById("desde");
    var input3=document.getElementById("hasta");
    var input4=document.getElementById("agreagar");
     // mapa.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // var defaultBounds = new google.maps.LatLngBounds(
    //   new google.maps.LatLng(-33.8902, 151.1759),
    //   new google.maps.LatLng(-33.8474, 151.2631)
    // );

    centerSfo = new google.maps.LatLng(-34.59295, -58.42001);
    circle = new google.maps.Circle({radius: 20000, center: centerSfo});
    bounds = circle.getBounds();
      
    var options={
      strictBounds:true,
      bounds: circle.getBounds(),
      types: ['address']
    }
    autocomplete=new google.maps.places.Autocomplete(input1,options);
    autocomplete=new google.maps.places.Autocomplete(input2,options);
    autocomplete=new google.maps.places.Autocomplete(input3,options);
    autocomplete=new google.maps.places.Autocomplete(input4,options);

  //----------------------CODIGO DE ACA PARA ARRIBA AGREGADO--------------------
  }


    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa);
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
      
   //----------------------DE ACA PARA ABAJO CODIGO AGREGADO-------------------- 
    var radio = document.getElementById("radio").value;
    var lugares=document.getElementById("tipoDeLugar").value;
    var request={
      location:posicion,
      radius:radio,
      type:[lugares]
    }
    servicioLugares = new google.maps.places.PlacesService(mapa);
    servicioLugares.nearbySearch(request,marcadorModulo.marcarLugares);
    
  
 //----------------------DE ACA PARA ARRIBA CODIGO AGREGADO-------------------- 
        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */

  }
  return {
    inicializar,
    buscarCerca
  }
})()
