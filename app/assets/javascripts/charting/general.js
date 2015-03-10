  
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
      height = 50,
      margin = {top: 5, right: 5, bottom: 5, left: 5};

  function chart(selection) {

    selection.each(function(data) {
      var div = d3.select(this),
          svg = div.selectAll('svg').data([data])
      
      svg.enter()
        .append('svg')
        .call(chart.svgInit);
    });
  }

  chart.svgInit = function(svg) {
    svg
      .attr('width', width)
      .attr('height', height);

    // Append a container group and translate it to consider the margins.
    var g = svg.append('g')
      .attr('class', 'chart-content')
      .attr('transform', 'translate(' + [margin.top, margin.left] + ')');

    // Append a white background rectangle.
    g.append('rect')
      .attr('width', width - margin.left - margin.right)
      .attr('height', height - margin.top - margin.bottom)
      .attr('fill', 'gray');
  };

  // Width Accessor
  chart.width = function(value) {
      if (!arguments.length) { return width; }
      width = value;
      return chart;
  };

  // Height Accessor
  chart.height = function(value) {
      if (!arguments.length) { return height; }
      height = value;
      return chart;
  };

  // Margin Accessor
  chart.margin = function(value) {
      if (!arguments.length) { return margin; }
      margin = value;
      return chart;
  };

  return chart;
}

