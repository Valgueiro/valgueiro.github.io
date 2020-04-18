import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class VoiceMirrorComponent extends Component {
  @tracked src = '';
  @tracked stream = '';
  @tracked audio = '';

  constructor() {
    // TODO revoke this permission
    super(...arguments);
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: false,
      })
      .then((stream) => {
        this.stream = stream;
        this.audio = new Audio();
        this.audio.srcObject = this.stream;
      });
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
