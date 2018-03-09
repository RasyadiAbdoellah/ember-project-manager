import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames:['col-xs-6'],

  dateValidator: computed('startDate', function() {
    let theDate
    if(this.get('startDate')) {
      theDate = this.get('startDate')
    } else {
      theDate = new Date()
    }
    const date = '0' + theDate.getUTCDate() 
    const month = '0' + (theDate.getUTCMonth() + 1)
    const year = theDate.getUTCFullYear()
    return `${year}-${month}-${date}`
  }),
  
  // startDateValidator: computed(function() {
  //   const theDate = new Date()
  //   const date = '0' + theDate.getDate() 
  //   const month = '0' + (theDate.getMonth() + 1)
  //   const year = theDate.getFullYear()
  //   return `${year}-${month}-${date}`
  // }),
  actions:{
    save (project) {
      console.log('save clicked')
      this.sendAction('save', project)
    }
  }
});
