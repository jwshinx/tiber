$( document ).ready(function() {
  if($("#twob_chart").length == 0) {
    return false;
  }
  
  console.log( "---> twob 4" );
  var barcode = barcodeChart();

  var data = addData([], 150, 300);

  d3.select('#twob_chart').selectAll('div.data-item')
    .data([data])
    .enter()
    .append('div')
    .attr('class', 'data-item')
    .call(barcode);

  d3.select('#btn-update')
    .on('click', function() {
      data = addData([], 50, 300);
      d3.select('#twob_chart').selectAll('div.data-item')
        .data([data])
        .call(barcode);
    })
});