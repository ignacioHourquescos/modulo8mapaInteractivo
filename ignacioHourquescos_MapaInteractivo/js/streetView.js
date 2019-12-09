streetViewModulo = (function () {
  var panorama // 'Visor' de StreetView

  function inicializar () {
        /* Completar la función inicializar()  que crea un panorama
        en una posición y lo muestra en la página. */
//---------------------CODIGO AGREGADO DE ACA PARA ABAJO-------------------
      var ubicacion={lat:-34.59296, lng:-58.42001};
      panorama=new google.maps.StreetViewPanorama(
        document.getElementById("pano"),{
          position: ubicacion,
          pov: {
            heading:3,
            pitch:0
          },
          visible:true
        });
      }

//---------------------CODIGO AGREGADO DE ACA PARA ARRIBA-------------------
    

// Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) { 
//---------------------CODIGO AGREGADO DE ACA PARA ABAJO-------------------
    /* Completar la función fijarStreetView que actualiza la posición
         de la variable panorama y cambia el mapa de modo tal que se vea
         el streetView de la posición actual. */
      panorama=new google.maps.StreetViewPanorama(
      document.getElementById("pano"),{
       position: ubicacion,
       pov: {
         heading:3,
         pitch:0
       },
       visible:true
     });
//---------------------CODIGO AGREGADO DE ACA PARA ARRIBA------------------- 
}

  return {
    inicializar,
    fijarStreetView
  }
})
()
