import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

// router.js determines which view is loaded for each route. Note that these will routes will be rendered in the top-most {{outlet}} tag in the my-application.hbs

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('projects', function() {});
  this.route('new-project',{path:'projects/new'});
  this.route('project', {path:'projects/:project_id'});
});

export default Router;
