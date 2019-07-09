import ApplicationSerializer from './application';
export default ApplicationSerializer.extend({
    normalize(modelClass, resourceHash) {
		resourceHash.photo_id = resourceHash.id;

		return this._super(...arguments);
	},
});