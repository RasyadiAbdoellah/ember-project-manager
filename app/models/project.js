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
      return this.get('dueDate').toString().substring(0,15)
    }
  }),

  displayStartDate: computed('startDate', function () {
    const start = this.get('startDate')
    const curDate = new Date()
    if(start){
      if (curDate > start) {
        return `Now! (originally ${start.toString().substring(0,15)})`
      } else {
        return start.toString().substring(0,15)
      }
    }
  }),

  displayProjectLength: computed('dueDate', 'startDate', function () {
    const dueDate = this.get('dueDate')
    const startDate = this.get('startDate')
    const oneDay = 1000 * 60 * 60 * 24 // one day in milliseconds
    const diffInDays = Math.ceil((dueDate - startDate )/ oneDay)
    return `${diffInDays} day(s)`
  }),

  displayTimeTillDue: computed('dueDate', 'startDate', function () {
    const dueDate = this.get('dueDate')
    const curDate = Date.now()
    const oneDay = 1000 * 60 * 60 * 24 // one day in milliseconds
    let diff
    if(((dueDate - curDate )/ oneDay) < 1){
      diff = Math.ceil((dueDate - curDate )/ (1000 * 60 * 60))
      console.log(diff)
      diff = diff <= 0 ? 'Today!' : `${diff} hour(s)`
    } else {
      diff = `${Math.ceil((dueDate - curDate )/ oneDay)} day(s)`
    }
    return diff
  }),

  inputDueDate: computed('dueDate', {
    get(key) {
      let date, month, year, theDate
      if(this.get('dueDate')){
        theDate = this.get('dueDate')
      } else {
        theDate = new Date()
      }
      date = theDate.getDate() < 10 ? '0' + theDate.getDate() : theDate.getDate()
      month = '0'+ (theDate.getMonth() + 1)
      year = theDate.getFullYear()
      console.log(`${year}-${month}-${date}`)
      return `${year}-${month}-${date}`
    },
    set(key, value) {
        const gmtOffset = new Date().getTimezoneOffset() * 1000 * 60 // in milliseconds
        const date = new Date(Date.parse(value) + gmtOffset)
        this.set('dueDate', date)
        return value
    }
  }),

  inputProjectLength: computed('dueDate', 'startDate', {
    // returns formatted project length in days
    get(key) {
      const dueDate = this.get('dueDate')
      const startDate = this.get('startDate')
      const oneDay = 1000 * 60 * 60 * 24 // one day in milliseconds
      return Math.ceil((dueDate - startDate )/ oneDay)
    },
    set(key, value) {
      const dueDate = this.get('dueDate')
      const oneDay = 1000 * 60 * 60 * 24 // one day in milliseconds
      const projectLength = value * oneDay
      let newDate
      if( (Date.parse(dueDate) - projectLength) > 0 ) {
        newDate = new Date((Date.parse(dueDate) - projectLength))
      } else {
        newDate = new Date()
      }
      this.set('startDate', newDate)
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
