import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
		this.get('store').unloadAll('list');

		return this._super(...arguments);
	},
    model() {
        return this.store.findAll('list');
    }
});
