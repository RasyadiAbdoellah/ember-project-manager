import Controller from '@ember/controller';

export default Controller.extend({
  viewEdit: false,

  actions: {
    toggleEdit () {
      this.toggleProperty('viewEdit')
      const model = this.get('model')
      if(model.get('hasDirtyAttributes')){
        this.send('cancelUpdate', model)
      }
      // console.log('viewEdit is:', this.get('viewEdit'))
    },
    saveProject (project) {
      this.toggleProperty('viewEdit')
      return true
    },
    cancelUpdate (project) {
      console.log('controller cancel')
      this.set('viewEdit', false)
      return true
    }
  }
});
