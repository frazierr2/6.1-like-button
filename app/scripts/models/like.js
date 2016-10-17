var Backbone = require('backbone');

var ButtonClick = Backbone.Model.extend({
  defaults: {
    clickCount: 0
  },
  like: function() {
    this.set('clickCount', this.get('clickCount') + 1);
  }
});

module.exports = {
  "ButtonClick": ButtonClick
};
