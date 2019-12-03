streetViewModulo = (function () {
  var paronama // 'Visor' de StreetView

  function inicializar () {
        /* Completar la función inicializar()  que crea un panorama
        en una posición y lo muestra en la página. */
 //---------------------------CODIGO DE ACA PARA ABAJO AGRADO-------------------
        var ubicacion = {lat:-34.59295, lng:-58.42001};
        panorama = new google.maps.StreetViewPanorama(
          document.getElementById('pano'),{
            position: ubicacion,
            pov: {
              heading: 3,
              pitch: 0
            }
          });
      map.setStreetView(panorama);
 //---------------------------CODIGO DE ACA PARA ARRIBA AGRADO-------------------
  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
        /* Completar la función fijarStreetView que actualiza la posición
         de la variable panorama y cambia el mapa de modo tal que se vea
         el streetView de la posición actual. */


 //---------------------------CODIGO DE ACA PARA ABAJO AGRADO-------------------
 panorama = new google.maps.StreetViewPanorama(
  document.getElementById('pano'),{
    position: ubicacion,
    pov: {
      heading: 3,
      pitch: 0
    }
  }); //aca v ala posicion actual
    map.setStreetView(panorama);
//---------------------------CODIGO DE ACA PARA ARRIBA AGRADO-------------------
  }

  
  return {
    inicializar,
    fijarStreetView
  }
})()


