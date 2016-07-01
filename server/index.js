var server = require('./server'),
	router = require('./router'),
	requestHandlers = require('./requestHandlers'),
	handle = {};

// Request for pages
handle['/'] = '/group.html';

// Request for data (array, time) API
handle['/get-time'] = requestHandlers.getTime;
handle['/get-list'] = requestHandlers.getList;

// for requests static files
handle['getFile'] = requestHandlers.getFile;

server.start(router.route, handle);