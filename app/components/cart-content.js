import Component from '@ember/component';
// import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';

export default Component.extend({
    // shoppingCart: service(),
    cart: computed(function() {
        return getOwner(this).lookup('service:shopping-cart');
    }),
    actions: {
        remove() {/*item*/
            console.log(`I want to remove ${item}`);
        }
    }
});