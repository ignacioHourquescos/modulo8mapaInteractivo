var mapa // Mapa que vamos a modificar
//_---------------------------------------------------------------------------------
/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
var posicionCentral={lat:-34.59295, lng:-58.42001};
//------------------------------------------------

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {

    /* Modificá la variable mapa con el constructor Map().
    Tendrás que asignarle un valor de zoom y
    un centro igual a la variable posicionCentral. */
//-------------------------------------AGERRAGDO DE ACA PARAABAJO--------------------------------------
var opciones={
  center:posicionCentral,
  zoom:15
}    
mapa=new google.maps.Map(document.getElementById("map"),opciones);

//-------------------------------------AGREGADO DE ACA PARA ARRIBA-----------------------------------
  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
//-----------------------------------AGREGADO DE ACA PARA ABAJO------------------------------ 
  
//-----------------------------------AGREGADO DE ACA PAR ARIB------------------------------  
}
//marcadorModulo.mostrarMiMarcador(posicionCentral);

