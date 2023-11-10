const morgan = require('morgan');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

let boardList = [];
let numOfBoard = [];

app.get('/', (req, res) => {
    res.send('This is api.js');
});

app.get('/board', (req, res) => {
    res.send(boardList);
});

app.post('/board', (req, res) => {
    const board = {
        "id": ++numOfBoard,
        "user_id": req.body.user_id,
        "date": new Date(),
        "title": req.body.title,
        "content": req.body.content
    };
    boardList.push(board);

    res.redirect('/board');
});

app.put('/board/:id', (req, res) => {
    const findItem = boardList.find((item) => {
        return item.id == +req.params.id
    });

    const idx = boardList.indexOf(findItem);
    boardList.splice(idx, 1);

    const board = {
        "id": +req.params.id,
        "user_id": req.body.user_id,
        "date": new Date(),
        "title": req.body.title,
        "contenct": req.body.content
    };

    boardList.push(board);

    res.redirect('/board');
});

app.delete('/board', (req, res) => {
    const findItem = boardList.find((item) => {
        return item.id == +req.params.id
    });

    const idx = boardList.indexOf(findItem);
    boardList.splice(idx, 1);

    res.redirect('/board');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 연결중. . .');
});