import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { notEmpty, equal, and } from '@ember/object/computed';

export default Service.extend({
    /**
	 * Ember Data Store service injection
	 * 
	 * @property {Ember.Service} store
	 */
    store: service(),

    items: null,

    hasItems: notEmpty('items'),

    init() {
        this._super(...arguments);
        // this.set('items', A);
    },

    add(item) {
        const store = this.get('store');

		if (!this.get('items')) {
            this.set('items', []);
			// record = store.createRecord('order', item);
            // this.set('items', store.peekAll('order'));
        } 
        this.get('items').addObject(item);
    },

    remove(item) {
        this.items.removeObject(item);
    },

    empty() {
        this.get('items').clear();
    }
});