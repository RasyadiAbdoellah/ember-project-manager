import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    // console.log('project model hook. if routes follows restful conventions GET request is automatic')
    return this.get('store').findRecord('project', params.project_id)
  },

  actions: {
    saveProject (project) {
      console.log('saveProject')
      return project.save()
    }
  }
});
