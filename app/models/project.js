import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  dueDate: DS.attr('date'),
  startDate: DS.attr('date'),
  projectLength:DS.attr('number'),
  user: DS.belongsTo('user'),

  formattedDueDate: computed('dueDate', function () {
    return this.get('dueDate').toLocaleDateString()
  }),
  formattedDueTime: computed('dueDate', function () {
    return this.get('dueDate').toLocaleTimeString()
  }),

  formattedStartDate: computed('startDate', function () {
    return this.get('startDate').toLocaleDateString()
  }),
  formattedStartTime: computed('startDate', function () {
    return this.get('startDate').toLocaleTimeString()
  }),
  formattedProjectLength: computed('projectLength', function () {
    // returns formatted project length
    return `${this.get('projectLength')/(3600 * 24)} days`
  })


});
