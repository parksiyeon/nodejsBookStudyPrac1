const express = require('express');
const app = express();

app.get('/', function (err, req, res, next,) {
    console.error(err.stack);
    res.status(500).send('Somethine Broke!');
});

app.listen(3000);