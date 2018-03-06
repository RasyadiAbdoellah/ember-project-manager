import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    this.get('store').createRecord('project',{})
  }
});
