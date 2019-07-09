import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    cart: service(),

    model(){
        let items = this.get('cart.items');
        return items;//[{name:'apple'}, {name:'banana'}, {name:'cherry'}];
	}
});