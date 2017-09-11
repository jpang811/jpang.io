
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*Location Data*/
var locations = [
      ['#Boston is where great minds develop ;)', 42.349626, -71.099536],
      ['#HongKong is home', 22.282357, 114.157807],
      ['#London History, architecture, beauty', 51.507911, -0.087749],
      ['#Hanoi Basked in the glory of street foods and beauty of Halong Bay ', 21.032089, 105.847452],
      ['#Bangkok Tropics and spa indulgences', 13.744752, 100.535061],
      ['#Seoul Fried chicken, beer and shopping sprees', 37.554551, 126.970670],
      ['#Tokyo Business trip by day and exploration by night at Roppongi and Shibuya', 35.662743, 139.731206],
      ['#Cancun The classic college spring break', 21.201767, -86.805240],
      ['#KualaLumpur Infinity pool of city views and the hipster Melaka', 3.158024, 101.711578],
      ['#Bali Offsite meeting by the scenic coast', -8.795669, 115.230785],
      ['#Toronto jpang was born here!', 43.739708, -79.413454],
      ['#SiemReap Temple run at the infamous Angkor Wat', 13.412480, 103.867007],
      ['#Kolkata Two-week hotel internship at ITC Sonar Hotel', 22.544288, 88.398072],
      ['#Reykjavik Hearty lamb soup, geysirs and outdoor geothermal spa in the snow', 64.133663, -21.865861],
      ['#SanFrancisco Pursuing innovation at the Valley', 37.422042, -122.084058],
      ['#Singapore Hong Kong\'s distant cousin', 1.287815, 103.866587],
      ['#LasVegas The untold tales', 36.117905, -115.172966],
      ['#Arizona Drove through beautiful landscapes and Antelope Canyon', 36.862179, -111.374352],
      ['#Florida Where dreams come true and fun rides go', 28.385242, -81.563842],
      ['#LosAngeles The place to seek fame and glory', 34.052182, -118.251371],
      ['#WashingtonDC Museums and White House', 38.903605, -77.038073],
      ['#Taipei All-time favourite', 25.041866, 121.546514],
      ['#Shanghai In its newfound Oriental city vibes', 31.216502, 121.475263],
      ['#Okinawa Sun, beach and friendly locals', 26.352177, 127.808602],
      ['#Hawaii My favourite place in the world', 19.568144, -155.618030],
      ['#Cairo Young and fascinated by the mummies and desert', 30.047003, 31.235461],
      ['#IguazuFalls Bordering Brazil and Argentina', -25.690500, -54.440911],
      ['#MachuPicchu Up in the mountains of Inca ruins and my first altitude sickness'],
      ['#Melbourne', -37.818125, 144.969064],
      ['#Sydney', -33.867922, 151.211487],
      ['#Auckland', -36.848457, 174.762180],
      ['#Glasgow', 55.861239, -4.253990],
      ['#Edinburgh', 55.950474, -3.186297],
      ['#Copenhagen Bikes, minimalism & all sorts of design wonders, ', 55.684065, 12.592988],
      ['#Amsterdam Bites of happiness, red lights and that canal life ', 52.359106, 4.884022],
      ['#Malmo, ', 55.604601, 13.002918],
      ['#Prague', 50.086477, 14.411447],
      ['#Cesky Krumlov', 48.812905, 14.313909],
      ['#Salzburg', 47.800205, 13.044633],
      ['#Hallstatt Quaint village surrounded by beautiful alpines and houses one of the oldest salt mines in the world', 47.563631, 13.636405],
      ['#Vienna', 48.185216, 16.376528],
      ['#Bratislava', 48.145116, 17.106877],
      ['#Budapest Massive heat wave led by thermal baths, meat fares and ruin bars', 47.483752, 19.051643],
      ['#Athens', 37.971541, 23.725771],
      ['#Santorini', 36.461557, 25.375281],
      ['#Mykonos', 37.444530, 25.325594]
      
  ];


var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map-test3'), {
  zoom: 3,
  center: {lat:26.630547, lng:128.145678},
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  scrollwheel: false,
  disableDefaultUI: true,

  styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#91999c"
            },
            
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 80
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#404a4f"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2d393e"
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
      title: name,
      position: latlng
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


}