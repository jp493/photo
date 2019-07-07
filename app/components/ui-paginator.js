import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    classNames: ['ui-paginator'],
    tagName: 'ui-paginator',
    hasPrevious: false,
    hasNext: false,
    /**
	 * Return the classNames for the previous button.
	 * When `hasPrevious` is false, add `hide` to it
	 * @property classNamesPrevious
	 */
	classNamesPrevious: computed('hasPrevious', function () {
		return 'btn btn-lg btn-link previous-btn'+ (this.get('hasPrevious') ? '' : ' hide');
    }),
    /**
	 * Return the classNames for the next button.
	 * When `hasNext` is false, add `hide` to it
	 * @property classNamesNext
	 */
	classNamesNext: computed('hasNext', function () {
		return 'btn btn-lg btn-link next-btn'+ (this.get('hasNext') ? '' : ' hide');
    }),

    actions: {
        
		next() {
			this.sendAction('next');
        },
        
		previous() {
			this.sendAction('previous');
		}
	}
});