import http from 'http';
import url from 'url';

let users = [];
http.createServer(function (req, res){
    if ( req.method === 'POST') {
        let body = "";
        req.on('data', data=> {
            body += data;
        });

        req.on('end', () => {
            body = JSON.parse(body);
            users[body.username] = body.password;
            console.log(users);
        });
    }else if (req.method === 'GET') {
        console.log(url.parse(req.url));
    }
    res.end();

}).listen(8080);