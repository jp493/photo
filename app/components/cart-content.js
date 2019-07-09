import Component from '@ember/component';
import { inject as service } from '@ember/service';
import EmberObject, { computed } from '@ember/object';

const DEFAULT_PRICE = 25;

export default Component.extend({
    classNames: ['cart-content'],
    cart: service(),
    items: computed('cart.items', function(){
        return this.get('cart').get('items');
    }),

    price: null,
    size: null,
    actions: {
        add() {
            let data = EmberObject.create({
                id: this.get('model.photo_id'),
                product: this.get('model'),
                price: this.get('price'),
                size: this.get('size')
            });
            this.get('cart').add(data);
        },
        remove(item) {
            this.cart.remove(item);
        },

        handleChange(param) {
            this.set('size', param);
            this.set('price', DEFAULT_PRICE * param);
        }
    }
});