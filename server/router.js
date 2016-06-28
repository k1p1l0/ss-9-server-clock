function route (pathname, handle, response) {
  	console.log("About to route a request for " + pathname);

	if(typeof handle[pathname] === 'function') {
		handle[pathname](response, pathname);
	} else if (pathname.slice(-2) === 'js') {
		handle['js'](response, pathname);
	} else if (pathname.slice(-3) === 'css') {
		handle['css'](response, pathname);
	} else {
		response.writeHead(404, {"Content-Type": "text/plain"});
	    response.write("404 Not found");
	    response.end();
	}
}

exports.route = route;