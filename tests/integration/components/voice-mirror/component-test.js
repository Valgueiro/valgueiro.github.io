import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import sinon from 'sinon';
import * as mediaPermissions from 'portifolio/utils/media-permissions';
module('Integration | Component | voice-mirror', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders without audio permission', async function (assert) {
    const getMediaDevicesPermissionsStub = sinon.stub(
      mediaPermissions,
      'default',
    );
    getMediaDevicesPermissionsStub.returns(Promise.reject('error'));
    await render(hbs`<VoiceMirror />`);
    assert.equal(
      this.element.querySelector('h1').textContent.trim(),
      'Voice Mirror',
      'It has a title',
    );

    assert.equal(
      this.element
        .querySelector('[data-test-voice-error-message]')
        .textContent.trim(),
      'You did not give me permission to access your mic :(.',
      'It renders the error message',
    );
  });

  test('it renders with audio permission', async function (assert) {
    const getMediaDevicesPermissionsStub = sinon.stub(
      mediaPermissions,
      'default',
    );

    let playCalled = false,
      pauseCalled = false;
    const audioMock = {
      play() {
        playCalled = true;
      },
      pause() {
        pauseCalled = true;
      },
    };
    getMediaDevicesPermissionsStub.returns(Promise.resolve(audioMock));

    await render(hbs`<VoiceMirror />`);

    assert.equal(
      this.element.querySelector('h1').textContent.trim(),
      'Voice Mirror',
      'It has a title',
    );

    const playButton = this.element.querySelector(
      '[data-test-start-voice-mirror]',
    );
    assert.equal(playButton.value.trim(), 'Start', 'it has a start button');
    await click(playButton);
    assert.ok(playCalled, 'audio play was called');

    const pauseButton = this.element.querySelector(
      '[data-test-pause-voice-mirror]',
    );
    assert.equal(pauseButton.value.trim(), 'Pause', 'it has a pause button');
    await click(pauseButton);
    assert.ok(pauseCalled, 'audio pause was called');
  });
});
