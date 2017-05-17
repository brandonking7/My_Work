ListController.$inject = ['ProjectsService'];

function ListController(ProjectsService) {
  const vm = this;

  vm.projects = [];

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

    $('.raised').on('click',function(){ // click the link
      // e.preventDefault(); // stop the default immediate redirect
      $(this).addClass('smaller'); // add the animation class
    // $(this).togglClass('square');

  });
  });


}

module.exports = ListController;
