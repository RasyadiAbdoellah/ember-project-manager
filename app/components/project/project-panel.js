import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  actions: {
    delete (project) {
      this.sendAction('deleteProject', project)
    }
  }
}).reopenClass({
  positionalParams: 'params'
});
