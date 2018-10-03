// import data from './../data/cajerosApi.json';
// var data = require('./../data/cajerosApi.json');

if (navigator.geolocation) {

  navigator.geolocation.getCurrentPosition(function (position) {
    let pos = {
      position: position.coords
    }

    function moveMapToBerlin(map) {
    

      map.setCenter({ lat: pos.position.latitude, lng: pos.position.longitude });
      map.setZoom(14);
      var miUbicacionMK = new H.map.Marker({ lat: pos.position.latitude, lng: pos.position.longitude });
      map.addObject(miUbicacionMK);
    
      // coord = {lat: , lng:position.coords.longitude}
      // Access-Control-Allow-Origin: *
      fetch(`https://places.demo.api.here.com/places/v1/discover/explore?at=${pos.position.latitude}%2C${pos.position.longitude}&cat=atm-bank-exchange&app_id=FEvccZMTuKIuT1WwAa1S&app_code=FhLrXpED1CV2tBJ-qymxcQ`)
      .then(res => res.json()).then(result => console.log(result))

      fetch(`https://places.demo.api.here.com/places/v1/discover/search?at=${pos.position.latitude}%2C${pos.position.longitude}&q=servipag&app_id=FEvccZMTuKIuT1WwAa1S&app_code=FhLrXpED1CV2tBJ-qymxcQ`)
      .then(res => res.json()).then(result => console.log(result))

      // fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=cajero%20grill&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@${pos.position.latitude},${pos.position.longitude}&key=AIzaSyCvCk4yatlooMLq8k8nn6RmLufQ3N6M4J4`)
      // .then(res => res.json()).then(res => console.log(res))
      
      // console.log(data)
    }

    function addMarkersToMap(map, logEvent) {

      var filtrar = fetch('../data/cajerosApi.json').then(e => e.json()).then(e => result = e.places.filter(e => e.category == 'sucursales-bci/region-metropolitana'))

      var data = filtrar.then(res => res.filter(res => res.latitude && res.longitude != null))
      data.then(e => {
        for (let i = 0; i < e.length; i++) {
          // var svgMarkup = './../img/j.png';
    
          // Add the first marker
          // var bearsIcon = new H.map.Icon(
          //   svgMarkup.replace('${FILL}', 'blue').replace('${STROKE}', 'red')),
          // bearsMarker = new H.map.Marker({ lat: e[i].latitude, lng: e[i].longitude },
          //     {icon: bearsIcon});
              var imageMarker = new H.map.Marker(new H.geo.Point( e[i].latitude,e[i].longitude ), {
                icon: new H.map.Icon('../img/j.png')
              });
              var image = new H.map.Marker(new H.geo.Point( e[i].latitude,e[i].longitude ), {
                icon: new H.map.Icon('../img/j.png')
              });
          map.addObject(imageMarker);
          imageMarker.addEventListener('tap', logEvent)
          imageMarker.setData(e[i]);
          // var parisMarker = new H.map.Marker({ lat: e[i].latitude, lng: e[i].longitude });
          // map.addObject(parisMarker);
        }
      });
      
    }
    function logEvent(e) {
      let data = e.target.getData();
      console.log( e.target.getData())
      var modal = document.getElementById('myModal');
      modal.style.display = "block";
      var direccion = document.getElementById('direccion');
      var span = document.getElementById('spane');
      direccion.innerHTML = data.address;
      
      span.addEventListener('click' , () => modal.style.display = "none")

    }
      // var entry = document.createElement('li');
      // entry.className = 'log-entry';
      // entry.textContent = ['event "', evt.type, '" @ '+ evt.target.getData()].join('');
      // logContainer.insertBefore(entry, logContainer.firstChild);
    
    

    /**
     * Boilerplate map initialization code starts below:
     */

    //Step 1: initialize communication with the platform
    var platform = new H.service.Platform({
      app_id: 'FEvccZMTuKIuT1WwAa1S',
      app_code: 'FhLrXpED1CV2tBJ-qymxcQ',
      useHTTPS: true
    });
    var pixelRatio = window.devicePixelRatio || 1;
    var defaultLayers = platform.createDefaultLayers({
      tileSize: pixelRatio === 1 ? 256 : 512,
      ppi: pixelRatio === 1 ? undefined : 320
    });

    //Step 2: initialize a map  - not specificing a location will give a whole world view.
    var map = new H.Map(document.getElementById('map'),
      defaultLayers.normal.map, { pixelRatio: pixelRatio });

    //Step 3: make the map interactive
    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components
    var ui = H.ui.UI.createDefault(map, defaultLayers);

    // Now use the map as required...
    moveMapToBerlin(map);
    addMarkersToMap(map, logEvent)
  })

}
