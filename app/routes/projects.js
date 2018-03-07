import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').findAll('project');
  },
  actions: {
    deleteProject (project) {
      console.log('deleteProject')
      project.destroyRecord()
    }
  }
});
