// import data from './../data/cajerosApi.json';
// var data = require('./../data/cajerosApi.json');

if (navigator.geolocation) {
  document.getElementById('mapabtn').style.display = "none"
  document.getElementById('mapa').style.display = "none";
  navigator.geolocation.getCurrentPosition(function (position) {
    let pos = {
      position: position.coords
    }
    console.log(pos)
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
      fetch(`https://places.demo.api.here.com/places/v1/discover/search?at=${pos.position.latitude}%2C${pos.position.longitude}&q=pizza&app_id=FEvccZMTuKIuT1WwAa1S&app_code=FhLrXpED1CV2tBJ-qymxcQ`)
        .then(res => res.json()).then(result => console.log(result))
      fetch(`https://places.demo.api.here.com/places/v1/discover/search?at=${pos.position.latitude}%2C${pos.position.longitude}&q=mcdonalds&app_id=FEvccZMTuKIuT1WwAa1S&app_code=FhLrXpED1CV2tBJ-qymxcQ`)
        .then(res => res.json()).then(result => console.log(result))
        // fetch(`https://places.demo.api.here.com/places/v1/discover/search?at=${pos.position.latitude}%2C${pos.position.longitude}&q=CajaVecina&app_id=FEvccZMTuKIuT1WwAa1S&app_code=FhLrXpED1CV2tBJ-qymxcQ`)
        // .then(res => res.json()).then(result => console.log(result))

      // fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=cajero%20grill&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@${pos.position.latitude},${pos.position.longitude}&key=AIzaSyCvCk4yatlooMLq8k8nn6RmLufQ3N6M4J4`)
      // .then(res => res.json()).then(res => console.log(res))

      // console.log(data)
    }

    function addMarkersToMap(map, logEvent) {

      var filtrar = fetch('../data/cajerosApi.json').then(e => e.json()).then(e => result = e.places.filter(e => e.category == 'sucursales-bci/region-metropolitana'))

      var data = filtrar.then(res => res.filter(res => res.latitude && res.longitude != null))
      data.then(e => {
        for (let i = 0; i < e.length; i++) {
          var imageMarker = new H.map.Marker(new H.geo.Point(e[i].latitude, e[i].longitude), {
            icon: new H.map.Icon('../img/j.png')
          });
          var image = new H.map.Marker(new H.geo.Point(e[i].latitude, e[i].longitude), {
            icon: new H.map.Icon('../img/j.png')
          });
          map.addObject(imageMarker);
          imageMarker.addEventListener('tap', logEvent)
          imageMarker.setData(e[i]);
        }
      });

    }
    function addToMap(map, logEventServipag) {
      let servipag = fetch(`https://places.demo.api.here.com/places/v1/discover/search?at=${pos.position.latitude}%2C${pos.position.longitude}&q=servipag&app_id=FEvccZMTuKIuT1WwAa1S&app_code=FhLrXpED1CV2tBJ-qymxcQ`).then(res => res.json()).then(result => result.results.items)
      servipag.then(e => {
        for (let i = 0; i < e.length; i++) {
          var imageMarker = new H.map.Marker(new H.geo.Point(e[i].position[0], e[i].position[1]), {
            icon: new H.map.Icon('../img/servipag.png')
          });
          map.addObject(imageMarker);
          imageMarker.addEventListener('tap', logEventServipag)
          imageMarker.setData(e[i]);
        }
      })

    }
    function mcdonaldsMarker(map,logEventMcdonalds){
      let mcdonalds= fetch(`https://places.demo.api.here.com/places/v1/discover/search?at=${pos.position.latitude}%2C${pos.position.longitude}&q=mcdonalds&app_id=FEvccZMTuKIuT1WwAa1S&app_code=FhLrXpED1CV2tBJ-qymxcQ`)
        .then(res => res.json()).then(result => result.results.items)
      mcdonalds.then(e => {
        for (let i = 0; i < e.length; i++) {
          var imageMarker = new H.map.Marker(new H.geo.Point(e[i].position[0], e[i].position[1]), {
            icon: new H.map.Icon('../img/mcdona.png')
          });
          map.addObject(imageMarker);
          imageMarker.addEventListener('tap', logEventMcdonalds)
          imageMarker.setData(e[i]);
        }
      })
    }
    function logEvent(e) {
      let data = e.target.getData();
      console.log(e.target.getData())
      var modal = document.getElementById('myModal');
      modal.style.display = "block";
      var direccion = document.getElementById('direccion');
      var span = document.getElementById('spane');
      direccion.innerHTML = data.address;

      span.addEventListener('click', () => modal.style.display = "none")

      ruta(data)
    }
    function logEventServipag(e) {
      let data = e.target.getData();
      console.log(e.target.getData())
      fetch(data.category.href).then(e => e.json()).then(e => console.log(e))
    }
    function logEventMcdonalds(e){

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

    var map = new H.Map(document.getElementById('map'),
      defaultLayers.normal.map, { pixelRatio: pixelRatio });

    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components
    var ui = H.ui.UI.createDefault(map, defaultLayers);

    // Now use the map as required...
    moveMapToBerlin(map);
    addMarkersToMap(map, logEvent);
    addToMap(map, logEventServipag);
    mcdonaldsMarker(map,logEventMcdonalds)
  })

}

// RUTAS --------------------

/**
 * Calculates and displays a walking route from the St Paul's Cathedral in London
 * to the Tate Modern on the south bank of the River Thames
 *
 * A full list of available request parameters can be found in the Routing API documentation.
 * see:  http://developer.here.com/rest-apis/documentation/routing/topics/resource-calculate-route.html
 *
 * @param   {H.service.Platform} platform    A stub class to access HERE services
 */


function ruta(e) {

  console.log(e)
  var btn = document.getElementById('btnruta')
  btn.addEventListener("click", () => {
    //  location = '../html/ruta.html';
    document.getElementById('map').style.display = "none";
    document.getElementById('mapabtn').style.display = "block";
    document.getElementById('mapa').style.display = "block"
    let btnmapa = document.getElementById('mapabtn');
    btnmapa.addEventListener('click', () => {
      location = './mapa.html'

    })
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(function (position) {
        let pos = {
          position: position.coords
        }
        let lat = pos.position.latitude.toString();
        let lng = pos.position.longitude.toString();
        let latpoint1 = e.latitude.toString();
        let lngpoint1 = e.longitude.toString();
        console.log(lat, lng)


        function calculateRouteFromAtoB(platform) {
          var router = platform.getRoutingService(),
            routeRequestParams = {
              mode: 'shortest;pedestrian',
              representation: 'display',
              waypoint0: `${lat},${lng}`, // St Paul's Cathedral
              waypoint1: `${latpoint1},${lngpoint1}`,  // Tate Modern
              routeattributes: 'waypoints,summary,shape,legs',
              maneuverattributes: 'direction,action'
            };



          router.calculateRoute(
            routeRequestParams,
            onSuccess,
            onError
          );
        }
        /**
         * This function will be called once the Routing REST API provides a response
         * @param  {Object} result          A JSONP object representing the calculated route
         *
         * see: http://developer.here.com/rest-apis/documentation/routing/topics/resource-type-calculate-route.html
         */


        function onSuccess(result) {
          var route = result.response.route[0];
          console.log(route.waypoint)
          addRouteShapeToMap(route);
          addManueversToMap(route);

          addWaypointsToPanel(route.waypoint);
          addManueversToPanel(route);
          addSummaryToPanel(route.summary);

        }

        /**
         * This function will be called if a communication error occurs during the JSON-P request
         * @param  {Object} error  The error message received.
         */
        function onError(error) {
          alert('Ooops!');
        }

        /**
         * Boilerplate map initialization code starts below:
         */

        // set up containers for the map  + panel
        var mapContainer = document.getElementById('mapa'),
          routeInstructionsContainer = document.getElementById('panel');

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

        //Step 2: initialize a map - this map is centered over Berlin
        var map = new H.Map(mapContainer,
          defaultLayers.normal.map, {
            center: { lat: pos.position.latitude, lng: pos.position.longitude },
            zoom: 13,
            pixelRatio: pixelRatio
          });

        //Step 3: make the map interactive
        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        // Create the default UI components
        var ui = H.ui.UI.createDefault(map, defaultLayers);

        // Hold a reference to any infobubble opened
        var bubble;

        /**
         * Opens/Closes a infobubble
         * @param  {H.geo.Point} position     The location on the map.
         * @param  {String} text              The contents of the infobubble.
         */
        function openBubble(position, text) {
          if (!bubble) {
            bubble = new H.ui.InfoBubble(
              position,
              // The FO property holds the province name.
              { content: text });
            ui.addBubble(bubble);
          } else {
            bubble.setPosition(position);
            bubble.setContent(text);
            bubble.open();
          }
        }


        /**
         * Creates a H.map.Polyline from the shape of the route and adds it to the map.
         * @param {Object} route A route as received from the H.service.RoutingService
         */
        function addRouteShapeToMap(route) {
          var lineString = new H.geo.LineString(),
            routeShape = route.shape,
            polyline;

          routeShape.forEach(function (point) {
            var parts = point.split(',');
            lineString.pushLatLngAlt(parts[0], parts[1]);
          });

          polyline = new H.map.Polyline(lineString, {
            style: {
              lineWidth: 4,
              strokeColor: 'rgba(0, 128, 255, 0.7)'
            }
          });
          // Add the polyline to the map
          map.addObject(polyline);
          // And zoom to its bounding rectangle
          map.setViewBounds(polyline.getBounds(), true);
        }


        /**
         * Creates a series of H.map.Marker points from the route and adds them to the map.
         * @param {Object} route  A route as received from the H.service.RoutingService
         */
        function addManueversToMap(route) {
          var svgMarkup = '<svg width="18" height="18" ' +
            'xmlns="http://www.w3.org/2000/svg">' +
            '<circle cx="8" cy="8" r="8" ' +
            'fill="#1b468d" stroke="white" stroke-width="1"  />' +
            '</svg>',
            dotIcon = new H.map.Icon(svgMarkup, { anchor: { x: 8, y: 8 } }),
            group = new H.map.Group(),
            i,
            j;

          // Add a marker for each maneuver
          for (i = 0; i < route.leg.length; i += 1) {
            for (j = 0; j < route.leg[i].maneuver.length; j += 1) {
              // Get the next maneuver.
              maneuver = route.leg[i].maneuver[j];
              // Add a marker to the maneuvers group
              var marker = new H.map.Marker({
                lat: maneuver.position.latitude,
                lng: maneuver.position.longitude
              },
                { icon: dotIcon });
              marker.instruction = maneuver.instruction;
              group.addObject(marker);
            }
          }

          group.addEventListener('tap', function (evt) {
            map.setCenter(evt.target.getPosition());
            openBubble(
              evt.target.getPosition(), evt.target.instruction);
          }, false);

          // Add the maneuvers group to the map
          map.addObject(group);
        }


        /**
         * Creates a series of H.map.Marker points from the route and adds them to the map.
         * @param {Object} route  A route as received from the H.service.RoutingService
         */
        function addWaypointsToPanel(waypoints) {



          var nodeH3 = document.createElement('h3'),
            waypointLabels = [],
            i;


          for (i = 0; i < waypoints.length; i += 1) {
            waypointLabels.push(waypoints[i].label)
          }

          nodeH3.textContent = waypointLabels.join(' - ');

          routeInstructionsContainer.innerHTML = '';
          routeInstructionsContainer.appendChild(nodeH3);
        }

        /**
         * Creates a series of H.map.Marker points from the route and adds them to the map.
         * @param {Object} route  A route as received from the H.service.RoutingService
         */
        function addSummaryToPanel(summary) {
          var summaryDiv = document.createElement('div'),
            content = '';
          content += '<b>Total distance</b>: ' + summary.distance + 'm. <br/>';
          content += '<b>Travel Time</b>: ' + summary.travelTime.toMMSS() + ' (in current traffic)';


          summaryDiv.style.fontSize = 'small';
          summaryDiv.style.marginLeft = '5%';
          summaryDiv.style.marginRight = '5%';
          summaryDiv.innerHTML = content;
          routeInstructionsContainer.appendChild(summaryDiv);
        }

        /**
         * Creates a series of H.map.Marker points from the route and adds them to the map.
         * @param {Object} route  A route as received from the H.service.RoutingService
         */
        function addManueversToPanel(route) {



          var nodeOL = document.createElement('ol'),
            i,
            j;

          nodeOL.style.fontSize = 'small';
          nodeOL.style.marginLeft = '5%';
          nodeOL.style.marginRight = '5%';
          nodeOL.className = 'directions';

          // Add a marker for each maneuver
          for (i = 0; i < route.leg.length; i += 1) {
            for (j = 0; j < route.leg[i].maneuver.length; j += 1) {
              // Get the next maneuver.
              maneuver = route.leg[i].maneuver[j];

              var li = document.createElement('li'),
                spanArrow = document.createElement('span'),
                spanInstruction = document.createElement('span');

              spanArrow.className = 'arrow ' + maneuver.action;
              spanInstruction.innerHTML = maneuver.instruction;
              li.appendChild(spanArrow);
              li.appendChild(spanInstruction);

              nodeOL.appendChild(li);
            }
          }

          routeInstructionsContainer.appendChild(nodeOL);
        }


        Number.prototype.toMMSS = function () {
          return Math.floor(this / 60) + ' minutes ' + (this % 60) + ' seconds.';
        }

        // Now use the map as required...
        calculateRouteFromAtoB(platform);
      })
    }
  })
}