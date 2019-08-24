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
  }
  var citymap = {
    chicago: {
      center: {lat: 41.878, lng: -87.629},
      population: 2714856
    },
    newyork: {
      center: {lat: 40.714, lng: -74.005},
      population: 8405837
    },
    losangeles: {
      center: {lat: 34.052, lng: -118.243},
      population: 3857799
    },
    vancouver: {
      center: {lat: 49.25, lng: -123.1},
      population: 603502
    }
  };


  