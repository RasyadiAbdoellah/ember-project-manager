import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  currentDate: computed(function() {
    const curDate = new Date()
    const date = '0' + curDate.getDate() 
    const month = '0' + (curDate.getMonth() + 1)
    const year = curDate.getFullYear()
    return `${year}-${month}-${date}`
  }),
  actions:{
    save (project) {
      console.log('save clicked')
      this.sendAction('save', project)
    }
  }
});
