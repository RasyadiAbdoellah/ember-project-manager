import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
  classNames: ['col-xs-12'],
  classNameBindings: ['displayResize:col-md-6'],
  displayResize: alias('viewEdit'),

  actions: {
    toggleEdit() {
      // console.log('before sendAction',this.get('dummyBool'))
      this.sendAction('toggleEdit')
    }
  }
});
