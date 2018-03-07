import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  dueDate: DS.attr('date'),
  startDate: DS.attr('date'),
  projectLength:DS.attr('number'),
  user: DS.belongsTo('user'),

  displayDueDate: computed('dueDate', function () {
    if(this.get('dueDate')){
      return this.get('dueDate').toLocaleDateString()
    }
  }),
  displayDueTime: computed('dueDate', function () {
    if(this.get('dueDate')){
      return this.get('dueDate').toLocaleTimeString()
    }
  }),
  
  displayStartDate: computed('startDate', function () {
    if(this.get('startDate')){
      return this.get('startDate').toLocaleDateString()
    }
  }),
  displayStartTime: computed('startDate', function () {
    if(this.get('startDate')){
      return this.get('startDate').toLocaleTimeString()
    }
  }),
  displayProjectLength: computed('projectLength', function () {
    // returns formatted project length
    if(this.get('projectLength')){
      return `${this.get('projectLength')/(3600 * 24)} days`
    }
  }),

  inputDueDate: computed('dueDate', {
    get(key) {
      let date
      if(this.get('dueDate')){
        date = this.get('dueDate')
      } else {
        date = new Date()
      }
      console.log('date string is:', date.toLocaleDateString())
      return date.toLocaleDateString().split('/').reverse().join('-')
    },
    set(key, value) {
      let date
      const parsedVal = value.split('-')
      console.log(parsedVal)
      if(this.get('dueDate')) {
        date = this.get('dueDate')
        console.log('inside date if',date)

        date.setDate(parseInt(parsedVal[2]))
        date.setMonth(parseInt(parsedVal[1]))
        date.setYear(parseInt(parsedVal[0]))
      } else {
        date = new Date()
        console.log('inside else',date)
      }
      console.log('end of set func',date)
      console.log(this.get('dueDate'))
      this.set('dueDate', date)
      return date
    }
  }),
  inputDueTime: computed('dueDate', {
    get(key) {
      let date
      if(this.get('dueDate')){
        date = this.get('dueDate')
      } else {
        date = new Date()
      }
      return date.toLocaleTimeString()
    },
    set(key, value) {
      let date
      const parsedVal = value.split(':')
      console.log(parsedVal)
      if(this.get('dueDate')) {
        date = this.get('dueDate')
        console.log('inside time if', date)
      } else {
        date = new Date()
        console.log('inside time else', date)
      }
      date.setHours(parseInt(parsedVal[0]),parseInt(parsedVal[1]))
      console.log('date hours set', date)
      this.set('dueDate', date)
      return date
    }
  }),


});
