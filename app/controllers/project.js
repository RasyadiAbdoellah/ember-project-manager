import Controller from '@ember/controller';

export default Controller.extend({
  viewEdit: false,

  actions: {
    toggleEdit () {
      this.toggleProperty('viewEdit')
      // console.log('viewEdit is:', this.get('viewEdit'))
    },
    saveProject (project) {
      this.toggleProperty('viewEdit')
      return true
    }
    
  }
});
