$(function() {

var $screen = $('#screen');
var $push = $('.buttons');
$push.on('click', '.operator',(function(event) {
  var $target = $(event.target);
  $screen.html(`${$target.text()}`);
  console.log(`${$target.text()}`);
}));







});
