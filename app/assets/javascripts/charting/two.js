$( document ).ready(function() {
  if($("#two_chart").length == 0) {
    return false;
  }
  
  console.log( "---> two 7" );

  var data = addData([], 5, 300);

  // console.log( "---> data: ", data );

  var barcode = barcodeChart();
    //.width(600)
    //.height(100);
    // .margin({top: 5, right: 5, bottom: 5, left: 5});

  d3.select('#two_chart').selectAll('div.data-item')
    .data(data)
    .enter()
    .append('div')
    .attr('class', 'data-item')
    .call(barcode);

/*
var barcodeChart = function() {
    'use strict';

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
*/
});