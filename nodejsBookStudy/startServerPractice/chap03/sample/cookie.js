const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Set-Cookie': 'name=psy'});
    console.log(req.headers.cookie);
    res.end('Cookie --> Header');
})
.listen(8080, () => {
    console.log('8080번 포트에서 연결중. . .');
});