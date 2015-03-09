  
console.log( "---> general js 3" );
function initDiv(selection) {
  console.log(selection);
  selection.each(function(data) {
    d3.select(this).append('p')
      .style('font-size', '18px')
      .html("===> " + data);
  });
}
