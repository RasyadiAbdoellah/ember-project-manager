import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  dueDate: DS.attr('date'),
  startDate: DS.attr('date'),
  user: DS.belongsTo('user'),
  
  displayDueDate: computed('dueDate', function () {
    if(this.get('dueDate')){
      return this.get('dueDate').toUTCString().substring(0,16)
    }
  }),

  displayStartDate: computed('startDate', function () {
    const start = this.get('startDate')
    const curDate = new Date()
    if(start){
      if (curDate > start) {
        return `Now! (originally ${start.toUTCString().substring(0,16)})`
      } else {
        return start.toUTCString().substring(0,16)
      }
    }
  }),

  inputDueDate: computed('dueDate', {
    get(key) {
      let date, month, year, theDate
      if(this.get('dueDate')){
        theDate = this.get('dueDate')
      } else {
        theDate = new Date()
      }
      date = theDate.getDate()
      month = theDate.getMonth() + 1
      year = theDate.getFullYear()
      return `${year}-${month}-${date}`
    },
    set(key, value) {
      const date = new Date(value)
      this.set('dueDate', date)
      return value
    }
  }),

  // inputStartDate: computed('startDate', {
  //   get(key) {
  //     let date, month, year, theDate
  //     if(this.get('startDate')){
  //       theDate = this.get('startDate')
  //     } else {
  //       theDate = new Date()
  //     }
  //     date = theDate.getDate()
  //     month = theDate.getMonth() + 1
  //     year = theDate.getFullYear()
  //     return `${year}-${month}-${date}`
  //   },
  //   set(key, value) {
  //     const date = new Date(value)
  //     console.log('date is',date)
  //     this.set('startDate', date)
  //     return value
  //   }
  // }),

  inputProjectLength: computed('dueDate', 'startDate', {
    // returns formatted project length in days
    get(key) {
      const dueDate = this.get('dueDate')
      const startDate = this.get('startDate')
      const oneDay = 1000 * 60 * 60 * 24 //converts milliseconds to time in days
      if(startDate){
        const diffInDays = (dueDate - startDate )/ oneDay
        return `${diffInDays} days`
      }
    },
    set(key, value) {
      const dueDate = this.get('dueDate')
      const oneDay = 1000 * 60 * 60 * 24 //converts milliseconds to time in days
      const curDate = new Date ()
      const projectLength = value * oneDay
      if(!(this.get('startDate'))){
        if ((Date.parse(dueDate) - projectLength) < Date.parse(curDate)){
          this.set('startDate', curDate) 
        } else {
          let newDate = new Date((Date.parse(dueDate) - projectLength))
          this.set('startDate', newDate)
        }
      }
    }
  }),

      // displayDueTime: computed('dueDate', function () {
  //   if(this.get('dueDate')){
  //     return this.get('dueDate').toLocaleTimeString()
  //   }
  // }),
  // displayStartTime: computed('startDate', function () {
  //   if(this.get('startDate')){
  //     return this.get('startDate').toLocaleTimeString()
  //   }
  // }),
  // inputDueTime: computed('dueDate', {
  //   get(key) {
  //     let date
  //     if(this.get('dueDate')){
  //       date = this.get('dueDate')
  //     } else {
  //       date = new Date()
  //     }
  //     return date.toLocaleTimeString()
  //   },
  //   set(key, value) {
  //     let date
  //     const parsedVal = value.split(':')
  //     console.log(parsedVal)
  //     if(this.get('dueDate')) {
  //       date = this.get('dueDate')
  //       console.log('inside time if', date)
  //     } else {
  //       date = new Date()
  //       console.log('inside time else', date)
  //     }
  //     date.setHours(parseInt(parsedVal[0]),parseInt(parsedVal[1]))
  //     console.log('date hours set', date)
  //     this.set('dueDate', date)
  //     return value
  //   }
  // }),


});
