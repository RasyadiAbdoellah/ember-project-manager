import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('project/project-inputs', 'Integration | Component | project/project inputs', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{project/project-inputs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#project/project-inputs}}
      template block text
    {{/project/project-inputs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
