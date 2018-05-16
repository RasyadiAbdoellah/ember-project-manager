import Controller from '@ember/controller';

// Project needs a controller to handle the UI toggle. A route cannot have computed values, so the controller will handle toggle functionality for the route.

// Components can have computed values that are locally scoped. So a component can identify its own view status, but once it is unloaded the values are reset as the instance is essentially destroyed. passing values up to the parent allows for permanence, as long as the parent is stays on the page. Note a refresh will also reset computed values.

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
