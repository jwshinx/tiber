$( document ).ready(function() {
  if($("#map_area").length == 0) {
    return false;
  }
  
  console.log( "---> maps" );

  var draw = function(res) {
    // var data = [ { lat: "33.979531" , long: "-122.978567" },
    //              { lat: "35.979531" , long: "-125.978567" } 
    // ];
    var data = res;
    console.log( "---> draw ", data);
    // d3.select("#map_area").style('background-color', 'gray');

    var w = 960,
        h = 400

    var margin = {top: 10, right: 10, bottom: 10, left: 10};
    var w = 800 - margin.left;
    // if(data[0].length > 100) {
    //     w = 1800 - margin.left;
    // }
    var h = 380 - margin.top - margin.bottom;      
    var parseDate = d3.time.format("%d-%b-%y").parse;
    var xlabels = data.map(function(d) { return d.ts; }) 

    var xScale = d3.time.scale()
      .domain(data.map(function(d) { return d.ts; }))
      .range([0, w]);

    var yScale = d3.scale.linear()
      .range([h - margin.bottom, margin.bottom])
      .domain([0, d3.max(data, function(d) {
        return d.latitude; 
      })]);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

var svg = d3.select("#map_area").append("svg")
  .attr("width", w + margin.left + margin.right)
  .attr("height", h + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    console.log("---> 8");

  //data.forEach(function(d) {
  //  //d.ts = parseDate(d.ts);
  //  d.ts = parseDate('2015-1-15');
  //  d.latitude = +d.latitude;
  //});

  // x.domain(d3.extent(data, function(d) { return d.timestamp; }));
  // y.domain(d3.extent(data, function(d) { return d.latitude; }));

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + h + ")")
      .call(xAxis);


  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");

  console.log("---> 10 ");

  var valueline = d3.svg.line()
    .x(function(d) { 
      return xScale(d.ts); 
    })
    .y(function(d) { 
      return yScale(d.latitude); 
    });
  console.log("---> 11 ");

  // problem svg.append("path")
  // problem   .attr("d", valueline(data))
  // problem   .attr("transform", "translate(" + margin.left + ", 0)");



  // svg.append("path")
  //     .datum(data)
  //     .attr("class", "line")
  //     .attr("d", line);
/*  aaa start
  aaa end
  */

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
/*
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
*/
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
    .success(function() {
      console.log('---> ajax success');
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