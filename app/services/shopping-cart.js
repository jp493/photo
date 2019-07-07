import Service from '@ember/service';

export default Service.extend({
    items: null,

    init() {
        this._super(...arguments);
        this.set('items', ['apple', 'banana', 'orange']);
    },

    add(item) {
        this.get('items').addObject(item);
    },

    remove(item) {
        this.get('items').removeObject(item);
    },

    empty() {
        this.get('items').clear();
    }
});