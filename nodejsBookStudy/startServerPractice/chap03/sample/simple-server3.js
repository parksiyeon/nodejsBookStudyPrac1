/* 문자열을 보내는 응답 코드 */

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Node.js로 서버 만들기</h1>');
    res.end('<p>3장 http 모듈 공부중</p>');
})
    .listen(8080);
/* Listening Event Listener */
server.on('listening', () => {
        console.log('8080포트에서 서버 연결 중. . .');
});

/* Error event Listener */
server.on('error', () => {
    console.error(error);
});