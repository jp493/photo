import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lists', function () {
    this.route('index', { path: '/' });
    this.route('product', { path: 'product/:id' });
  });
  this.route('my-cart');
});

export default Router;
