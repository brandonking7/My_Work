VagabondController.$inject = ['$state'];
function VagabondController($state) {
  const vm = this;

  $('button').on('click', function() {
    $('#card').addClass('animated zoomOut');

    setTimeout(function() {
      $state.go('portfolio');
    }, 100);
  });
}

module.exports = VagabondController;
