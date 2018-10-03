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
      // fetch(`https://places.demo.api.here.com/places/v1/discover/explore?at=${position.coords.latitude}%2C${position.coords.longitude}&cat=atm-bank-exchange&app_id=FEvccZMTuKIuT1WwAa1S&app_code=FhLrXpED1CV2tBJ-qymxcQ`)
      // .then(res => res.json()).then(result => this.setState({ points: [...this.state.points, result.results.items]}))
      addMarkersToMap(map)
      // console.log(data)
    }

    function addMarkersToMap(map) {

      var filtrar = fetch('../data/cajerosApi.json').then(e => e.json()).then(e => result = e.places.filter(e => e.category == 'sucursales-bci/region-metropolitana'))

      var data = filtrar.then(res => res.filter(res => res.latitude && res.longitude != null))
      data.then(e => {
        for (let i = 0; i < e.length; i++) {
          var parisMarker = new H.map.Marker({ lat: e[i].latitude, lng: e[i].longitude });
          map.addObject(parisMarker);
        }
      });

    }

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

  })

}
