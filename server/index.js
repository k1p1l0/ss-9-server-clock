var server = require('./server'),
	router = require('./router'),
	requestHandlers = require('./requestHandlers'),
	handle = {};

// Request for pages
handle['/'] = requestHandlers.group;
handle['/index.html'] = requestHandlers.index;

// Request for data (array, time) API
handle['/get-time'] = requestHandlers.getTime;
handle['/get-list'] = requestHandlers.getList;

// for requests files
handle['js'] = requestHandlers.js;
handle['css'] = requestHandlers.css;

server.start(router.route, handle);