ListController.$inject = ['$state'];

function ListController($state) {
  const vm = this;

  // vm.projects = [];

  // vm.items = ['banana', 'apple', 'grape', 'yogurt']
  vm.items = [
    {name: 'Paul', title: 'CEO'}
  ];

  // activate();
  //
  // function activate() {
  //   loadAllProjects();
  // }
  //
  // function loadAllProjects() {
  //   ProjectsService
  //   .loadAll()
  //   .then(function resolve(response) {
  //     console.log(response)
  //     vm.projects = response.data.projects;
  //   });
  // }

  $(document).ready(function() {
    $('#liv').click(function(){
      $("li").addClass('animated zoomOut');
      setTimeout(function () { $state.go('livcert') }, 100);
    });
    $("#giig").click(function(){
      $("li").addClass('animated zoomOut');
      setTimeout(function () { $state.go('giig') }, 100);
    });
    $("#corn").click(function(){
      $("li").addClass('animated zoomOut');
      setTimeout(function () { $state.go('cornholer') }, 100);
    });
    $("#bj").click(function(){
      $("li").addClass('animated zoomOut');
      setTimeout(function () { $state.go('blackjack') }, 100);
    });
    $("#cars").click(function(){
      $("li").addClass('animated zoomOut');
      setTimeout(function () { $state.go('cars') }, 100);
    });
    $("#city").click(function(){
      $("li").addClass('animated zoomOut');
      setTimeout(function () { $state.go('vagabond') }, 100);
    });

 });



}

module.exports = ListController;
