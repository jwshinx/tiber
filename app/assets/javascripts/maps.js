$( document ).ready(function() {
  console.log( "---> maps" );

  var draw = function(res) {
    var data = res
    console.log( "---> draw ");
    d3.select("#map_area").style('background-color', 'gray');

    var width = 960,
        height = 400

    var projection = d3.geo.mercator()
      .center([33.979531, -122.978567])
      .scale(50000);

    var path = d3.geo.path()
      .projection(projection);
    
    var svg = d3.select("#map_area").append("svg")  
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "green");
    
    svg.selectAll(".graticule")  
        .data(data)
        .enter()
        .append("path")
        .attr("class", "land")
        .attr("d", path);    
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