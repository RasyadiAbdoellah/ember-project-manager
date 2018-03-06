import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  due_date: DS.attr('date'),
  start_date: DS.attr('date'),
  user_id: DS.attr('number')
});
