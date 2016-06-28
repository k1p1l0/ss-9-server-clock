var fs = require('fs'),
	Clock = require('./libs/Clock'),
    Student = require('./libs/Student');

// Handler for index.html page
function getIndex (response, uri) {
    fs.readFile('../public/index.html', function (err, data) {
    	response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    });
}

// Handler for group.html page
function getGroupList (response, uri) {
    fs.readFile('../public/group.html', function (err, data) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    });
}

// Handler for Ajax requests
function getTime (response) {
	var cl = new Clock();

    response.writeHead(200, {"Content-Type": "text/html"});
	response.write(cl.normalize());
    response.end();
}

// Handler for JS files
function getJs (response, uri) {
    fs.readFile('../public' + uri, function (err, data) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(data);
        response.end();
    });
}

// Handler for CSS files
function getCss (response, uri) {
    fs.readFile('../public' + uri, function (err, data) {
        response.writeHead(200, {"Content-Type": "text/css"});
        response.write(data);
        response.end();
    });
}


function getList (response, uri) {
    var studentArray = [];

    studentArray.push(new Student('Kirill', '1993', 'M', 'kirillkozakceo', '380637467482', 'kirillkozakceo@gmail.com'));
    studentArray.push(new Student('Nastya', '1991', 'F', 'kolomoets.anastasiya', '', ''));
    studentArray.push(new Student('Chung', '', 'F', 'chung-alpha', '+380934637542', ''));
    studentArray.push(new Student('Artur', '', 'M', 'art_smitt', '', ''));
    studentArray.push(new Student('Dmitriy', '1988', 'M', 'pavlovsky_dima', '', ''));
    studentArray.push(new Student('Petro', '', 'M', 'petr_artal', '', 'supershmell@gmail.com'));

    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(studentArray));
    response.end();
}


exports.index = getIndex;
exports.group = getGroupList;

exports.js = getJs;
exports.css = getCss;

exports.getTime = getTime;
exports.getList = getList;