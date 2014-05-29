function Rabbit(data) {
  for (var key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      this[key] = data[key];
    }
  }
  
  var template = $('#template-rabbit').html();
  this.$el = $('<div></div>')
      .addClass('rabbit')
      .html(_.template(template, data));
}