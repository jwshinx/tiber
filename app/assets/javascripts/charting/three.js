$( document ).ready(function() {
  if($("#three_chart").length == 0) {
    return false;
  }
  console.log( "---> three 1" );
  var barcode = barcodeChart();

  // var data = ['foo', 'bar', 'caaa', 'gumby'];
  var data = [
    { name: 'aaa', mentions: addData([], 100, 100), byHour: 11.1 },
    { name: 'bbb', mentions: addData([], 100, 100), byHour: 22.2 },
    { name: 'ccc', mentions: addData([], 100, 100), byHour: 33.3 },
    { name: 'ddd', mentions: addData([], 100, 100), byHour: 44.4 },
    { name: 'eee', mentions: addData([], 100, 100), byHour: 55.5 },
  ];
  
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
    .text(function(d) { return d.name; });

  rows.append('td')
    .datum(function(d) { return d.mentions; })
    .call(barcode);

  rows.append('td')
    .html(function(d) { return d.byHour; });
});