// JS Geolocation method, to find user current location
function initMap() {
  let currentPosition = {
      lat: 0,
      lng: 0,
  };

  const mapOptions = {
      center: currentPosition,
      zoom: 15,
      streetViewControl: false,
    
  }

  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  const infoWindow = new google.maps.InfoWindow({
      content: document.getElementById('information')
  });
  // JS Geolocation method, to find user current location
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {

          currentPosition = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
          };

          infoWindow.setPosition(currentPosition);
          map.setCenter(currentPosition);

          //adds marker of your current position (arrow)
          let marker = new google.maps.Marker({
              position: currentPosition,
          });
          marker.setMap(map);
        
       
        })}}