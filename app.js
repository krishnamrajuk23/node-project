/**
 * Created by raju on 3/12/2017.
 */
var fs = require('fs');         // To fead files from server
var Url = require('Url');

function reanderHtml(path,response){
    fs.readFile(path,null,function(error,data){
        if(error){
            response.writeHead(400);
            response.write('File not Found!');
            console.log('File not found');
        }else{
            response.write(data); // Here data holds index file data
        }
        response.end();
    });
}

module.export ={
    handleRequest : function (request,response) {
        response.writeHead(200,{'Content-Type':'text/html'});   // help to render type which is mention like html,plain,etc
        var path = URl.parse(request.url).pathname;             // help to get the requested path by the user
        switch (path){
            case '/':
                reanderHtml('./index.html',response);
            case '/login':
                reanderHtml('./login.html',response);
            default:
                response.writeHead(404);
                respone.write('Route is not defind / file not found');
        }
    }
}