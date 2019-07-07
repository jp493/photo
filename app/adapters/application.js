
import RESTAdapter from 'ember-data/adapters/rest';
export default RESTAdapter.extend({
  host: 'https://picsum.photos',
  namespace: 'v2'
});