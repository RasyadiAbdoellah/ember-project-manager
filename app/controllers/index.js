import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  auth: service(),
  flashMessages: service(),
  isAuthenticated: alias('auth.isAuthenticated'),
});
