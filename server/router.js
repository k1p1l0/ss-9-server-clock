var fileExists = require('file-exists'),
	static = require('./libs/static');

function route (pathname, handle, response) {
  	console.log("About to route a request for " + pathname);

	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, pathname);
	} else if (typeof handle[pathname] === 'string') {
		handle['getFile'](response, handle[pathname]);
	} else if (fileExists(static.path + pathname)) {
		handle['getFile'](response, pathname);
	} else {
		response.writeHead(404, {"Content-Type": "text/plain"});
	    response.write("404 Not found");
	    response.end();
	}
}

exports.route = route;