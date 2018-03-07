import Component from '@ember/component';

export default Component.extend({
  actions: {
    delete (project) {
      console.log('delete button clicked, sending action up')
      this.sendAction('deleteProject', project)
    }
  }
});
