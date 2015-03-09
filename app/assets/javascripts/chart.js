$( document ).ready(function() {
  if($("#chart").length == 0) {
    return false;
  }
  
  console.log( "---> chart 1" );
  var data = ['a', 'b', 'c'];

  /*
  // ===> long
  var divChart = d3.select('#chart');
  // var x = divChart.selectAll('div.data-item');
  var x = divChart.selectAll('div');
  console.log('1 ', x);
  var divItems = divChart.selectAll('div')
    .data(data);
  console.log('2 ', divItems);
  //  .style('margin-bottom', '30px')
  var y = divItems.enter()
    .append('div')
    .style('width', '200px')
    .style('height', '30px')
    .style('background-color', 'orange')
    .attr('class', 'data-item')
    .append('p')
    .html(function(d) { return d; });
  console.log('3 ', y);
  var two = d3.selectAll('.data-item');
  console.log('4 ', two);  
  two.style('background-color', 'green')
  */

  /*
  // ===> medium
  var divChart = d3.select('#chart');
  var divItems = divChart.selectAll('div.data-item')
    .data(data);

  divItems.enter()
    .append('div')
    .attr('class', 'data-item')
    .append('p')
    .html(function(d) { return d; });
  */

  /*
  // ===> short
  d3.select('#chart').selectAll('div.data-item')
    .data(data)
    .enter()
    .append('div')
    .attr('class', 'data-item')
    .append('p')
    .html(function(d) { return d; });
  */

  /*
  // ===> better
  d3.select('#chart').selectAll('div.data-item')
    .data(data)
    .enter()
    .append('div')
    .attr('class', 'data-item')
    .append('p')
    .call(function(selection) {
      selection.each(function(d) {
        d3.select(this).append('p')
          .style('color', 'blue')
          .html(d);
      });
    });
  */

  // ===> best
  d3.select('#chart').selectAll('div.data-item')
    .data(data)
    .enter()
    .append('div')
    .attr('class', 'data-item')
    .append('p')
    .call(initDiv);
});

function initDiv(selection) {
  console.log(selection);
  selection.each(function(data) {
    d3.select(this).append('p')
      .style('font-size', '18px')
      .html("---> " + data);
  });
}
