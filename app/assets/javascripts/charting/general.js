  
console.log( "---> general js 3" );
function initDiv(selection) {
  console.log(selection);
  selection.each(function(data) {
    d3.select(this).append('p')
      .style('font-size', '18px')
      .html("===> " + data);
  });
}

var randomInterval = function(avgSeconds) {
  return Math.floor(-Math.log(Math.random()) * 1000 * avgSeconds);
}

var addData = function(data, numItems, avgSeconds) {
  var n = data.length,
      t = (n > 0) ? data[n - 1].date : new Date();

  for( var k = 0; k < numItems - 1; k += 1 ) {
    t = new Date(t.getTime() + randomInterval(avgSeconds));
    data.push({date: t});
  }

  return data;
}

var barcodeChart = function() {
  
  // console.log(randomInterval(200));

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
      
      var xScale = d3.time.scale()
        //.domain([timeInterval.offset(lastDate, -1), lastDate])
        .domain(d3.extent(data, function(d) { return d.date; }))
        .range([0, width - margin.left - margin.right]);

      var g = svg.select('g.chart-content'),
          lines = g.selectAll('line');

      var bars = g.selectAll('line')
        .data(data, function(d) { return d.date; });

      bars.enter().append('line')
        .attr('x1', function(d) { return xScale(d.date); })
        .attr('x2', function(d) { return xScale(d.date); })
        .attr('y1', 0)
        .attr('y2', height - margin.top - margin.bottom)
        .attr('stroke', '#000')
        .attr('stroke-opacity', 0.5);

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
      .attr('fill', '#d2d2d2');
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

