angular
  .module('mywork')
  .service('ProjectsService', ProjectsService);

  ProjectsService.$inject = ['$http']

    function ProjectsService($http) {
      const self = this;

      self.loadAll = loadAll;

      function loadAll() {
        return $http.get('/projects');
      }

  };
