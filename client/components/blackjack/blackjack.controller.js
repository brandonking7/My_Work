BlackjackController.$inject = ['$state'];

function BlackjackController($state) {
  const vm = this;

  $('button').click(function() {
    $('#card').addClass('animated zoomOut');

    setTimeout(function() {
      $state.go('portfolio');
    }, 100)

  });

}



module.exports = BlackjackController;
