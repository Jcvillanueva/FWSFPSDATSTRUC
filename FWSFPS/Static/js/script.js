// google.charts.load('current', {
//     'packages': ['map'],
//     // Note: you will need to get a mapsApiKey for your project.
//     // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
//     'mapsApiKey': 'AIzaSyBHdoXsxaGM-Waq1VYRcQc4WR6FRR6410k'
//   });
//   google.charts.setOnLoadCallback(drawMap);

//   function drawMap () {
//     var data = new google.visualization.DataTable();
//     data.addColumn('string', 'Address');
//     data.addColumn('string', 'Location');
//     data.addColumn('string', 'Marker')

//     data.addRows([
//       ['New York City NY, United States', 'New York',   'blue' ],
//       ['Scranton PA, United States',      'Scranton',   'green'],
//       ['Washington DC, United States',    'Washington', 'pink' ],
//       ['Philadelphia PA, United States',  'Philly',     'green'],
//       ['Pittsburgh PA, United States',    'Pittsburgh', 'green'],
//       ['Buffalo NY, United States',       'Buffalo',    'blue' ],
//       ['Baltimore MD, United States',     'Baltimore',  'pink' ],
//       ['Albany NY, United States',        'Albany',     'blue' ],
//       ['Allentown PA, United States',     'Allentown',  'green']
//     ]);
//     var url = 'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/';

//     var options = {
//       zoomLevel: 6,
//       showTooltip: true,
//       showInfoWindow: true,
//       useMapTypeControl: true,
//       icons: {
//         blue: {
//           normal:   url + 'Map-Marker-Ball-Azure-icon.png',
//           selected: url + 'Map-Marker-Ball-Right-Azure-icon.png'
//         },
//         green: {
//           normal:   url + 'Map-Marker-Push-Pin-1-Chartreuse-icon.png',
//           selected: url + 'Map-Marker-Push-Pin-1-Right-Chartreuse-icon.png'
//         },
//         pink: {
//           normal:   url + 'Map-Marker-Ball-Pink-icon.png',
//           selected: url + 'Map-Marker-Ball-Right-Pink-icon.png'
//         }
//       }
//     };
//     var map = new google.visualization.Map(document.getElementById('map'));

//     map.draw(data, options);
//   }


function initMap() {
    // The location of Uluru
    var makati = {lat: 14.554517, lng: 121.024483}; 
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: makati});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: makati, map: map});

    for (var city in citymap) {
        // Add the circle for this city to the map.
        var cityCircle = new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000', 
          fillOpacity: 0.35,
          map: map,
          center: citymap[city].center,
          radius: Math.sqrt(citymap[city].population) * 100
        });
      }
      for (var city in citymapGoods) {
        // Add the circle for this city to the map.
        var cityCircle = new google.maps.Circle({
          strokeColor: 'green',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: 'green', 
          fillOpacity: 0.35,
          map: map,
          center: citymapGoods[city].center,
          radius: Math.sqrt(citymapGoods[city].population) * 100
        });
      }
  }
  var citymap = {
    philippines: {
      center: {lat: 14.5547, lng: 121.0244},
      population: 10
    },
    pemboMakati: {
      center: {lat: 14.5441, lng: 121.0578},
      population: 50
    },
    tejeros: {
      center: {lat: 14.5715, lng: 121.0142},
      population: 8
    }
  };

  var citymapGoods = {
    belair: {
        center: {lat: 14.5639, lng:121.0263},
        population: 5
      }
  };



  