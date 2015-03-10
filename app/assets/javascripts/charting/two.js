$( document ).ready(function() {
  if($("#two_chart").length == 0) {
    return false;
  }
  
  var data = addData([], 150, 300);

  var barcode = basicBarcodeChart();
    //.width(600)
    //.height(100);
    // .margin({top: 5, right: 5, bottom: 5, left: 5});

  d3.select('#two_chart').selectAll('div.data-item')
    .data([data])
    .enter()
    .append('div')
    .attr('class', 'data-item')
    .call(barcode);
});