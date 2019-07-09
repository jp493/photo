import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.get('store').peekRecord('list', params.id);
    },
    
    setupController(controller, model) {
		this._super(...arguments);
		controller.set('model', model.data);
    }
});