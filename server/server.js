var http = require('http'),
	url = require('url');

function start (route, handle) {
  function onRequest (request, response) {
  	var pathname = url.parse(request.url).pathname;

  	route(pathname, handle, response);
  }

  http.createServer(onRequest).listen(3000);
}

exports.start = start;