const http = require('http');

const session = {}
const sessKey = new Date();

session[sessKey] = {name : 'psy'};

http.createServer((req, res) => {
    res.writeHead(200, { 'Set-Cookie': 'session=${sessKey}'});
    res.end('session-cookie ->> header');
})
.listen(8080, () => {
    console.log('8080번 포트에서 실행중. . .');
});
