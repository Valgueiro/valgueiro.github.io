import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | voice-mirror', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<VoiceMirror />`);
    assert.equal(
      this.element.textContent.trim(),
      'Voice Mirror',
      'It has a title'
    );

    assert.equal(
      this.element.querySelector('[data-test-start-voice-mirror').value.trim(),
      'Start',
      'it has a start button'
    );

    assert.equal(
      this.element.querySelector('[data-test-pause-voice-mirror').value.trim(),
      'Pause',
      'it has a pause button'
    );
  });
});
