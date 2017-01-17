var locations = [
      ['#Boston is where the great minds develop', 42.349626, -71.099536],
      ['#HongKong is home', 22.282357, 114.157807],
      ['#London History, architecture, beauty', 51.507911, -0.087749],
      ['#Hanoi Basked in the glory of street foods and beauty of Halong Bay ', 21.032089, 105.847452],
      ['#Bangkok', 13.744752, 100.535061],
      ['#Seoul', 37.554551, 126.970670],
      ['#Tokyo Business trip by day and exploration by night at Roppongi and Shibuya', 35.662743, 139.731206],
      ['#Cancun The classic college spring break', 21.201767, -86.805240],
      ['#KualaLumpur Infinity pool of city views and the hipster Melaka', 3.158024, 101.711578],
      ['#Bali Offsite meeting by the scenic coast', -8.795669, 115.230785],
      ['#Toronto jpang was born here!', 43.739708, -79.413454],
      ['#SiemReap Temple run at the infamous Angkor Wat', 13.412480, 103.867007],
      ['#Kolkata Two-week hotel internship at ITC Sonar Hotel', 22.544288, 88.398072],
      ['#Reykjavik Blue Lagoon Spa in the snow', 64.133663, -21.865861],
      ['#SanFrancisco Pursuing innovation at the Valley', 37.422042, -122.084058],
      ['#Singapore', 1.287815, 103.866587],
      ['#LasVegas The untold tales', 36.117905, -115.172966],
      ['#Arizona Drove through beautiful landscapes and Antelope Canyon', 36.862179, -111.374352],
      ['#Florida Where dreams come true and fun rides go', 28.385242, -81.563842],
      ['#LosAngeles The place to seek fame and glory', 34.052182, -118.251371],
      ['#WashingtonDC Museums and White House', 38.903605, -77.038073],
      ['#Taipei All-time favourite', 25.041866, 121.546514],
      ['#Shanghai In its newfound Oriental city vibes', 31.216502, 121.475263],
      ['#Okinawa Sun, beach and friendly locals', 26.352177, 127.808602],
      ['#Oahu My favourite place in the world', 19.568144, -155.618030],
      ['#Cairo Young and fascinated by the mummies and desert', -34.021378, 18.733411],
      ['#IguazuFalls Bordering Brazil and Argentina', -25.690500, -54.440911],
      ['#MachuPicchu Up in the mountains of Inca ruins and my first altitude sickness']
  ];

var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: new google.maps.LatLng(32.523846, 16.134300),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
         {
           "featureType": "administrative",
           "elementType": "labels.text.fill",
           "stylers": [
               {
                   "color": "#444444"
               }
            ]
         },

         {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#f2f2f2"
                  }
              ]
         },

         {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
         },
         
         {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 45
                  }
              ]
          },

         {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
         },

         {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },

          {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },

          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#46bcec"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },

          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#8fc9e8"
                  }
              ]
          },

          {
              "featureType": "water",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          }
      ]
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) { 
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}



// This function creates each marker and it sets their Info Window content
function createMarker(latlng, name, address1, address2, postalCode){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: name
   });

   // This event expects a click on a marker
   // When this event is fired the Info Window content is created
   // and the Info Window is opened.
   google.maps.event.addListener(marker, 'click', function() {
      
      // Creating the content to be inserted in the infowindow
      var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + name + '</div>' +
         '<div class="iw_content">' + address1 + '<br />' +
         address2 + '<br />' +
         postalCode + '</div></div>';
      
      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
   });
}