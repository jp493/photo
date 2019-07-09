export function initialize(application) {
  application.inject('route:application', 'cart', 'service:cart');
  application.inject('route:lists', 'cart', 'service:cart');
  application.inject('controller:lists', 'cart', 'service:cart');
}

export default {
  initialize
};
