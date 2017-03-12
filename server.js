var http = require('http');
var fs = require('fs');         // To fead files from server
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'}); // help to render type which is mention like html,plain,etc

    //read a file from srever and send it as response
    fs.readFile('./index.html',null,function(error,data){
        if(error){
            response.writeHead(400);
            response.write('File not Found!');
            console.log('File not found');
        }else{
            response.write(data); // Here data holds index file data
        }
        response.end();
    });
}).listen(3000);