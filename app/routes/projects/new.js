import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').createRecord('project',{})
  },
  actions: {
    save (project) {
    console.log('save clicked. project is', project)
  }
}
});
