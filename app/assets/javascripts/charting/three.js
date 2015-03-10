$( document ).ready(function() {
  if($("#three_chart").length == 0) {
    return false;
  }
  console.log( "---> three 1" );
  var barcode = barcodeChart();

  var data = ['foo', 'bar', 'caaa', 'gumby'];

  var table = d3.select('#three_chart').selectAll('table')
    .data([data])
    .enter()
    .append('table')
    .attr('class', 'table table-condensed');

  var tableHead = table.append('thead');
  var tableBody = table.append('tbody');

  tableHead.append('tr').selectAll('th')
    .data(['Name', 'Count', 'Rate'])
    .enter()
    .append('th')
    .text(function(d) { return d; });

  var rows = tableBody.selectAll('tr')
    .data(data)
    .enter()
    .append('tr');

  rows.append('td')
    .text(function(d) { return 'hello'; });

  // rows.append('td')
  //   .text(function(d) { return 'hello'; });

});