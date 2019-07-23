let restaurants = document.getElementById('restaurants')
// JS Geolocation method, to find user current location
function initMap() {
  let currentPosition = {
      lat: 0,
      lng: 0,
  };

  const mapOptions = {
      center: currentPosition,
      zoom: 15,  
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

// get json data on the console
        fetch("./list.json")
        .then(function(resp){
           return resp.json()
        })
        .then(function(data){
          console.log(data[0].address)
        })



      function restaurantList(data){
        data.forEach(i => {
          return i.name
        });
      }
    
        //pseudo code 
        // 1. show map on the screen
        // 2. get the user current location
        // 3. create a json file with an array of restaurants 
        // 4. get the json file on the javascript file 
        // 5. function to get the restaurant name and score 
          // 5.1 get the name of each restaurant 