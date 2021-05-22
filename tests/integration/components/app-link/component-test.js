import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | app-link', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const app = {
      icon: 'icon',
      title: 'title',
      description: 'description',
      route: 'route',
    };
    this.set('app', app);
    await render(
      hbs`<AppLink @icon={{app.icon}} @title={{app.title}} @description={{app.description}} @route={{app.route}}/>`,
    );

    assert.dom('[data-test-icon]').hasText(app.icon);
    assert.dom('[data-test-title]').hasText(app.title);
    assert.dom('[data-test-description]').hasText(app.description);
  });
});
