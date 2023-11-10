const morgan = require('morgan');
const url = require('url');
const uuidAPIkey = require('uuid-apikey');

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const keu = {
    apikey: "F374X3R-3VMMHJ0-GZWFNAV-ZQMW39Q",
    uuid: "78ce4e8f-1ee9-48c8-87f8-faabfde9c1a6"
};

let boardList = [];
let numOfBoard = 0;

app.get('/', (req, res) => {
    res.send('this is api.js');
});

app.get('/board/:apikey/:type', (req, res) => {
    let { type, apikey } = req.params;
    const queryData = url.parse(req.url).query;

    if(uuidAPIkey.isAPIKey(apikey) && uuidAPIkey.check(apikey, key.uuid)) {
        if (type === 'search') {
            const keyword = queryData.keyword;
            const result = queryData.filter((e) => {
                return e.title.includes(keyword)
            })
            res.send(result);
        }
        else if (type === 'user') {
            const user_id = queryData.user_id;
            const result = boardList.filter((e) => {
                return e.user_id === user_id
            });
            res.send(result);
        }
        else {
            res.send('wrong_URL');
        }
    } else {
        res.send('wrong_APIKey');
    }
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 실행중');
});