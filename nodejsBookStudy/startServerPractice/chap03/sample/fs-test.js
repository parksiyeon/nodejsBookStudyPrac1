/* 파일을 보내는 응답코드 */

const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const f = await fs.readFile('./fs-test.html');
        res.writeHead(200, {'Contect-Type': 'text/html; charset=utf-8'});
        //200이면 요청 성공
        res.end(f);
    } catch (err) {
        console.error(err); // 요청에 실패했을 때 출력
        res.writeHead(500, {'Contect-Type': 'text/html; charset=utf-8'});
        //500이면 서버에 오류 발생
        res.end(err.message); // 오류 메시지와 함께 요청 종료
    }
})
    .listen(8080, () =>{
        console.log('8080포트에서 서버 연결중. . .');
    });