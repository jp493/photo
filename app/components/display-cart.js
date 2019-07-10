import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    cart: service(),
    total: computed('cart.total', function(){
        return this.get('cart').get('total');
    }),
    actions: {
        remove(item) {
            this.cart.remove(item);
        },
        empty() {
            this.cart.empty();
        }
    }
});
