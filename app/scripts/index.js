var Backbone = require('backbone');
var $ = require('jquery');
var ButtonClick = require('./models/like').ButtonClick;

var click = new ButtonClick();
var startNum = click.get('clickCount');
// console.log(startNum);
// console.log('click', click)

//
$('#like-button').on("click", function() {
  click.like();
  // console.log(click.get('clickCount'));
  $('.like-num').text(click.get('clickCount'));

  click.toJSON();

});
