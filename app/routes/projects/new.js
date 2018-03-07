import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').createRecord('project',{})
  },
  actions: {
    save (model) {
    console.log('save clicked', model)
    model.save()
  }
}
});
