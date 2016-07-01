var fs = require('fs'),
	Clock = require('./libs/Clock'),
    Student = require('./libs/Student'),
    static = require('./libs/static');

function getFile (response, uri) {
    fs.readFile(static.path + uri, function (err, data) {
        if (uri.slice(-3) === 'css') {
            response.writeHead(200, {"Content-Type": "text/css"});
        } else if (uri.slice(-2) === 'js') {
            response.writeHead(200, {"Content-Type": "text/javascript"});
        } else if (uri.slice(-4) === 'html') {
            response.writeHead(200, {"Content-Type": "text/html"});
        }
        response.write(data);
        response.end();
    });
}

function getTime (response) {    
    response.writeHead(200, {"Content-Type": "application/json"});
	response.write(JSON.stringify(new Clock().normalize()));
    response.end();
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


exports.getFile = getFile;
exports.getTime = getTime;
exports.getList = getList;