import ListModuleAdapter from './application';

export default ListModuleAdapter.extend({
    pathForType: function(type) {
        return type;
    },
    buildURL(){
		let url = this._super(...arguments);
		return `${url}?limit=100`;
    }
});