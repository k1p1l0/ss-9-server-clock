var server = require('./server'),
	router = require('./router'),
	requestHandlers = require('./requestHandlers'),
	handle = {};

handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/get-time'] = requestHandlers.getTime;
handle['js'] = requestHandlers.js;

server.start(router.route, handle);