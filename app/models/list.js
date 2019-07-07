import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
	author: attr('string'),
	width: attr('number'),
	height: attr('number'),
	url: attr('string'),
	download_url: attr('string')
});

    