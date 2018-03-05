[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# ember-auth-template

A front-end framework template for starting projects with a recent version of
either the [Rails API Template](https://git.generalassemb.ly/ga-wdi-boston/rails-api-template)
or the [Express API Template](https://git.generalassemb.ly/ga-wdi-boston/express-api-template).

_Note: When using the Express API Template, User endpoints may need to be
modified in order for all authentication actions to execute properly._

At the beginning of each cohort, update from [ember-template](https://git.generalassemb.ly/ga-wdi-boston/ember-template).

## Prerequisites

- [ember-auth-template-walkthrough](https://git.generalassemb.ly/ga-wdi-boston/ember-auth-template-walkthrough)

## Installation

1. [Download](../../archive/master.zip) this template.
1. Unzip and rename the template directory (`unzip ~/Downloads/ember-auth-template-master.zip`).
1. Move into the new project and `git init`.
1. Empty [`README.md`](README.md) and fill with your own content.
1. Replace all instances of `ga-wdi-boston.ember-auth` with your app name. This
    includes:
      - [`app/adapters/application.js`](app/adapters/application.js)
      - [`app/index.html`](app/index.html)
      - [`app/services/ajax.js`](app/services/ajax.js)
      - [`config/environment.js`](config/environment.js)
      - [`package.json`](package.json)
      - [`tests/index.html`](tests/index.html)
      - [`tests/unit/initializers/text-field-test.js`](tests/unit/initializers/text-field-test.js)
1. Install dependencies with `npm install`.
1. `git add` and `git commit` your changes.
1. Run the development server with `ember server`. Use the `--proxy` flag to
    avoid writing development-specific CORS and CSP settings.

## Structure

Dependencies are stored in [`package.json`](package.json).

Developers should store styles in [`app/styles`](app/styles) and load them
from [`app/styles/app.scss`](app/styles/app.scss).

To deploy an ember-auth-template based SPA, run `grunt deploy`.

## Additional Resources

- [Implementing Authentication with Ember Services - Ember
    Igniter](http://emberigniter.com/implementing-authentication-with-ember-services/)
- [jpadilla/ember-simple-auth-token: Ember Simple Auth extension that is
    compatible with token-based authentication like
    JWT.](https://github.com/jpadilla/ember-simple-auth-token)
- [simplabs/ember-simple-auth: A library for implementing
    authentication/authorization in Ember.js
    applications.](https://github.com/simplabs/ember-simple-auth)
- [EmberJS Authentication Tutorial](https://auth0.com/blog/emberjs-authentication-tutorial/)
- [How To Import A Library on Ember.js](https://stackoverflow.com/questions/38919757/how-to-import-a-library-on-ember-js)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
