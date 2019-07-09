import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
	photo_id: attr('string'),
	author: attr('string'),
	width: attr('number'),
	height: attr('number'),
	url: attr('string'),
	download_url: attr('string')
});

    