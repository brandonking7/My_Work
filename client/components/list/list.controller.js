ListController.$inject = [];

function ListController() {
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
    $("li").click(function(){
      // $("li").addClass('animated bounceOutLeft');
      $state.go('cars')
      setTimeout(function () { $state.go('home') }, 5000);
      // alert('Yo its working');
    // setTimeout(function () { activityMonitor.sendActivity('li') }, 5000);
});
    $("left").click(function(){
    setTimeout(function () { $state.go('home') }, 5000);
});

    $('li').on('click',function(){ // click the link
      // e.preventDefault(); // stop the default immediate redirect
      // $(this).addClass('zoomOut'); // add the animation class

    // $(this).togglClass('square');

  });
  });



}

module.exports = ListController;
