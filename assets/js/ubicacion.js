
//manejo de errores
function errorHandler(err) {
    if (err.code == 1) {
        alert("error acceso denegado");
    } else if (err.code == 2) {
        alert("error la posicion no existe o no se encuentra");
    }
}

function initMap() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: { lat: 10.745356, lng: -84.626535 },
    });
    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  }

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    navigator.geolocation.getCurrentPosition(
        function (position){
          coords =  {
            lng: position.coords.longitude,
            lat: position.coords.latitude
          };
          


       
    directionsService.route(
      {
        origin:coords,
        destination: { lat: 10.017984, lng: -84.178698},
        // tambien se puede usar de otro modo WALKING - BICYCLING - TRANSIT
        travelMode: google.maps.TravelMode["DRIVING"],
      },
      (response, status) => {
        if (status == "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    ); },function(error){console.log(error);});
  }