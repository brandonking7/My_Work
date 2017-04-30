ListController.$inject = ['ProjectsService'];

function ListController(ProjectsService) {
  const vm = this;

  vm.projects = [];

  activate();

  function activate() {
    loadAllProjects();
  }

  function loadAllProjects() {
    ProjectsService
    .loadAll()
    .then(function resolve(response) {
      console.log(response)
      vm.projects = response.data.projects;
    });
  }
  

}

module.exports = ListController;
