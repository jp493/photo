import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Controller.extend({
    cart: service(),
    items: alias('cart.items')

    // actions: {
    //     remove() {/*item*/
    //         console.log(`I want to remove`);
    //     }
    // }
});