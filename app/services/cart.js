import Service from '@ember/service';
import { computed } from '@ember/object';
import { notEmpty } from '@ember/object/computed';

export default Service.extend({

    items: null,

    hasItems: notEmpty('items'),

    init() {
        this._super(...arguments);
    },

    add(item) {
		if (!this.get('items')) {
            this.set('items', []);
        } 
        this.get('items').addObject(item);
        this.notifyPropertyChange('total');
    },

    total: computed('items', function(){
        // get sum of price prop across all objects in array
        var priceTotal = this.get('items').reduce(function(prev, cur) {
            return prev + cur.price;
        }, 0);
        return priceTotal;
    }),

    remove(item) {
        this.items.removeObject(item);
        this.notifyPropertyChange('total');
    },

    empty() {
        this.get('items').clear();
        this.notifyPropertyChange('total');
    }
});