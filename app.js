/**
 * Created by raju on 3/12/2017.
 */
var fs = require('fs');         // To fead files from server

module.exports = {
    handleRequest : function (request, response) {
        var file;
        if (request.url == '/') {
            file = 'index.html';
        } else if (request.url == '/login') {
            file = 'login.html';
        } else {
            file = 'notfound.html'
        }

        fs.readFile(file, function(err, data){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        });
    }
}