import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import getMediaDevicesPermissions from 'portifolio/utils/media-permissions';
export default class VoiceMirrorComponent extends Component {
  @tracked audio = '';

  get isAudioAvailable() {
    return Boolean(this.audio);
  }

  constructor() {
    super(...arguments);
    getMediaDevicesPermissions()
      .then((audio) => (this.audio = audio))
      .catch(() => {});
  }

  @action
  async start() {
    this.audio.play();
  }

  @action
  async stop() {
    this.audio.pause();
  }
}
