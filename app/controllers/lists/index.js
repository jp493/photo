import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';
import { A } from '@ember/array';

const LIMIT = 25;
const MAX = 100;

export default Controller.extend({
    hasNextPage: computed('offset', function() {
        return this.get('offset') > MAX/LIMIT-2 ? false : true;
    }),

	hasPreviousPage: computed('offset', function() {
        return this.get('offset') <= 0 ? false : true;
    }),

    offset: 0,

    listObject: computed('model', 'offset', function(){
        let _newListObj = A();
        let _newList = A();
        var model = this.get('model');
        let i = 0;
        let j = 0;

        model.forEach((photo) => {
            if (i < LIMIT) {
                _newList.pushObject({
                    id: photo.id,
                    data: photo.data
                });
                i++;
            } 
            if (i === LIMIT) {
                _newListObj.push(EmberObject.create({
                    offset: j,
                    newList: _newList
                }));
                // empty object for current page
                i = 0;
                _newList = [],
                j++;
            }
        });
        return _newListObj.find(item => item.offset === this.get('offset'));
    }),

    actions: {
        previousPage() {
            this._super();
            let _offset = this.get('offset') - 1;
            this.set('offset', _offset);
        },
    
        nextPage() {
            this._super();
            let _offset = this.get('offset') + 1;
            this.set('offset', _offset);
        }
    }
});