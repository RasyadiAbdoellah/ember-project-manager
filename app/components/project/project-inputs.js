import Component from '@ember/component';

export default Component.extend({
  actions:{
    save (project) {
      console.log('save clicked')
      this.sendAction('save', project)
    }
  }
});
