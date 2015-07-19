if (Meteor.isClient) {
  Meteor.startup(function() {
    var container = document.getElementById('app-container');
    React.render(<Counter />, container);
  });
}
