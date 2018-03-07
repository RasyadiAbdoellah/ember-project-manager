import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').createRecord('project',{})
  },
  actions: {
    saveProject (project) {
    console.log('saving project', project)
    return project.save()
      .then(() =>{this.transitionTo('projects')})
  }
}
});
