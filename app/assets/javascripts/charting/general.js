  
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
  'use strict';

  // Chart variables
  var width = 600,
      height = 30,
      margin = {top: 5, right: 5, bottom: 5, left: 5};

  // Date accessor function
  var value = function(d) { return d.date; };

  // Barcode chart time interval
  var timeInterval = d3.time.day;

  function chart(selection) {
    selection.each(function(data) {

      // Select the SVG elements and bind it to a single element dataset.
      var div = d3.select(this),
          svg = div.selectAll('svg').data([data]);

      // Append the SVG on enter.
      svg.enter().append('svg')
          .call(chart.svgInit);

      // Select the chart group.
      var g = svg.select('g.chart-content'),
          lines = g.selectAll('line');

      // Compute the most recent date of the dataset.
      var lastDate = d3.max(data, value);

      // Compute the most recent date of the data items binded to the bars.
      if (!lines.empty()) {
          lastDate = d3.max(lines.data(), value);
      }

      // Compute the horizontal scale.
      var xScale = d3.time.scale()
          .domain([timeInterval.offset(lastDate, -1), lastDate])
          .range([0, width - margin.left - margin.right]);

      // Bind the data to the selection with the lines.
      var bars = g.selectAll('line').data(data, value);

      // Create the bars on enter
      bars.enter().append('line')
          .attr('x1', function(d) { return xScale(value(d)); })
          .attr('x2', function(d) { return xScale(value(d)); })
          .attr('y1', 0)
          .attr('y2', height - margin.top - margin.bottom)
          .attr('stroke', '#000')
          .attr('stroke-opacity', 0.5);

      // Update the scale to use the new dataset.
      lastDate = d3.max(data, value);
      xScale.domain([timeInterval.offset(lastDate, -1), lastDate]);

      // Update the position of the bars.
      bars.transition()
          .duration(300)
          .attr('x1', function(d) { return xScale(value(d)); })
          .attr('x2', function(d) { return xScale(value(d)); });

      // Remove the exiting bars.
      bars.exit().transition()
          .duration(300)
          .attr('stroke-opacity', 0)
          .remove();
    });
  }

  // SVG Initialization Method
  chart.svgInit = function(svg) {

    // Set the SVG size.
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

  // Date Accessor
  chart.value = function(accessorFunction) {
      if (!arguments.length) { return value; }
      value = accessorFunction;
      return chart;
  };

  // Time Interval Accessor
  chart.timeInterval = function(value) {
      if (!arguments.length) { return timeInterval; }
      timeInterval = value;
      return chart;
  };

  return chart;
};

var basicBarcodeChart = function() {
  
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
