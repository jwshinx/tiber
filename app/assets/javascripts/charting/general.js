  
console.log( "---> general js 3" );
function initDiv(selection) {
  console.log(selection);
  selection.each(function(data) {
    d3.select(this).append('p')
      .style('font-size', '18px')
      .html("===> " + data);
  });
}

var barcodeChart = function() {

  var width = 600,
      height = 50;

  function chart(selection) {

    selection.each(function(data) {
      var div = d3.select(this),
          svg = div.selectAll('svg').data([data])
      
      svg.enter()
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', 'red');
    });
  }
  return chart;
}

