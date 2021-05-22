import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
      {
        route: 'mirror',
        icon: '🎙',
        title: 'Voice Mirror',
        description: 'Check if your mic is working correctly',
      },
    ];
  }
}
