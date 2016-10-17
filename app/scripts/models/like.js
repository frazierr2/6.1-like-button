var Backbone = require('backbone');
var $ = require('jquery');

var ButtonClick = Backbone.Model.extend({
  defaults: {
    clickCount: 0
  },
  like: function() {
    this.set('clickCount', this.get('clickCount') + 1);
  },

  toJSON: function() {
    if (this.get('clickCount') == 1) {
      $('.like').text('Like');
    } else {
      $('.like').text('Likes');
    }
  }
});




module.exports = {
  "ButtonClick": ButtonClick
};
