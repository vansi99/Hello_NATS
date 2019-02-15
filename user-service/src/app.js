const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const port = require('config').get('port');
const db = require('./database');


morgan.token('remote-addr', function (req) {
    return req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
});

morgan.token('http-version', function(req) {
    return ((req.headers['x-forwarded-proto']) ? req.headers['x-forwarded-proto'] : "");
});


app.use(cors());
app.use(bodyParser.json());
app.use(morgan(':remote-addr - [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length]'))

app.use('/api/v1',require('./routes/users.router'));

db.sequelize.sync()
    .then(() => {
        console.log('Connect database is successfully');

        app.listen(port, (err) => {
            if (!err) {
                console.log("Client Server ONLINE");
             
            } 
        });
    })
    .catch(err => {
        console.log(err.message);
        process.exit();
    });

module.exports = app;

