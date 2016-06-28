var fs = require('fs'),
	Clock = require('./libs/Clock');

function start (response, uri) {
    fs.readFile('../public/index.html', function (err, data) {
    	response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    });
}

function getTime (response) {
	var cl = new Clock();

    response.writeHead(200, {"Content-Type": "text/html"});
	response.write(cl.normalize());
    response.end();
}

function js (response, uri) {
    fs.readFile('../public' + uri, function (err, data) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(data);
        response.end();
    });
}

exports.start = start;
exports.getTime = getTime;
exports.js = js;