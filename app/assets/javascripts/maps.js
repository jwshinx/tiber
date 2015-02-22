$( document ).ready(function() {
  console.log( "---> maps" );

  var draw = function(res) {
    var data = [ { lat: "33.979531" , long: "-122.978567" },
                 { lat: "35.979531" , long: "-125.978567" } 
    ];
    var dataa = res;
    console.log( "---> draw ", dataa);
    // d3.select("#map_area").style('background-color', 'gray');

    var width = 960,
        height = 400

    //var projection = d3.geo.mercator()
    //  .center([33.979531, -122.978567])
    //  .scale(50000);

                      // .mode("equidistant")
    //var projection = d3.geo.azimuthal()
    //                  .origin([33.979531, -122.978567])
    //                  .scale(40000);

    // var projection = d3.geo.albersUsa()
    //   .origin([0.85, 51.2])
    //   .scale(40000);

    // var path = d3.geo.path()
    //   .projection(projection);


// var projection = d3.geo.albers()
//     .rotate([96, 0])
//     .center([-.6, 38.7])
//     .parallels([29.5, 45.5])
//     .scale(1070)
//     .translate([width / 2, height / 2])
//     .precision(.1);

    //.center([-122.632323, 33.2323237])
var projection = d3.geo.albers()
    .center([-22.6, 30.7])
    .scale(1900);

var path = d3.geo.path()
    .projection(projection);

var graticule = d3.geo.graticule()
    .extent([[-98 - 45, 38 - 45], [-98 + 45, 38 + 45]])
    .step([5, 5]);

var svg = d3.select("#map_area").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("circle").attr("r",5)
  .attr("transform", function() {
    return "translate(" + projection([-111,33]) + ")";
  });
svg.selectAll("circles.points")
.data(data)
.enter()
.append("circle")
.attr("r",5)
.attr("transform", function(d) {
  return "translate(" + projection([d.long,d.lat]) + ")";
});
// svg.append("path")
//     .datum(graticule)
//     .attr("class", "graticule")
//     .attr("d", path);

    /*    
    var svg = d3.select("#map_area")  
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "green");

    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function(d) {
        return projection ([d.long, d.lat]) [0];
      })
      .attr("cy", function(d) {
        return projection ([d.long, d.lat]) [1];
      });
    */
    // map_svg
    //   .append("circle")
    //   .attr("r",5)
    //   .attr("transform", function() {
    //     return "translate(" + projection([0,0]) + ")";
    //   });

    // svg.selectAll("circles.points")
    //   .data(data)
    //   .enter()
    //   .append("circle")
    //   .attr("r",5)
    //   .attr("transform", function(d) {
    //     return "translate(" + projection([d.long,d.lat]) + ")";
    //   });

    //    svg.selectAll(".graticule")  
    //        .data(data)
    //        .enter()
    //        .append("path")
    //        .attr("class", "land")
    //        .attr("d", path);    
  }

  var getData = function(data) {
    $.ajax({
      type: "GET",
      url: "/coordinates",
      data: { "zip" : "90023" },
      success: onSuccess,
      dataType: "json"
    })
    .done(function() {
      console.log('---> ajax done');
    })
    .fail(function() {
      console.log('---> ajax fail');      
    })
    .always(function() {
      console.log('---> ajax always');            
    });
  }

  var onSuccess = function(res) {
    console.log( "---> onSuccess done ", res);
    draw(res);
  }

  getData();  

});