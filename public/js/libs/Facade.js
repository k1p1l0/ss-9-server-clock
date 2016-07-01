'use strict';

var facade = ( () => {
	const ROUTES = {
			'getStudents': {
				uri: '/get-list',
				channel: 'read'
			},
			'getTime': {
				uri: '/get-time',
				channel: 'read'
			}
		}

	function _read (routeKey = {}) {
		var route = ROUTES[routeKey];

		$.get(route.uri, function (data) {
	  		mediator.publish(route.channel, data);
	  	});
	}

	return {
		read: _read
	}	
})();