function route (pathname, handle, response) {
  console.log("About to route a request for " + pathname);

	if(typeof handle[pathname] === 'function') {
		handle[pathname](response, pathname);
	} else {
		handle['js'](response, pathname);
	}
}

exports.route = route;