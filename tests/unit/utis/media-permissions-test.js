import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';
import getMediaDevicesPermissions from 'portifolio/utils/media-permissions';
module('Unit | Utils | media-permissions', function (hooks) {
  setupTest(hooks);

  test('getMediaDevicesPermissions | it gets the device permissions', async function (assert) {
    const getUserMediaStub = sinon.stub(navigator.mediaDevices, 'getUserMedia');
    const mockStream = 'stream';
    getUserMediaStub.returns(Promise.resolve(mockStream));

    const audioStub = sinon.stub(window, 'Audio');
    audioStub.returns({});

    const output = await getMediaDevicesPermissions();
    sinon.assert.calledWith(getUserMediaStub, {
      audio: true,
    });

    assert.deepEqual(output, { srcObject: mockStream }, 'output is right');
  });

  test('getMediaDevicesPermissions | it throws an error when it occurs', async function (assert) {
    const getUserMediaStub = sinon.stub(navigator.mediaDevices, 'getUserMedia');
    getUserMediaStub.returns(Promise.reject('oops'));

    let errorThrown = false;
    try {
      await getMediaDevicesPermissions();
    } catch (e) {
      errorThrown = true;
    }

    assert.ok(errorThrown, 'an error was thrown');
  });
});
