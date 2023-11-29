const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const api = require('./api')

const uri = "mongodb://"+process.env.DB_USERNAME+":"+process.env.DB_PASSWORD+"@"+process.env.DB_ADDRESS+"/chall";
mongoose.set('strictQuery', true);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('READY Database holbogdloo!'))
.catch(err => console.log('FAILED Database holboltiin aldaa: ' + err));

const checkDBConnection = (req, res, next) => {
    if(mongoose.connection.readyState == 1) {
        next()
        return
    }
    res.json({ status: 500, error: 'Database not connected! NUM CTF' })
};

app.use(checkDBConnection)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const data = {
        pageTitle: 'Basic API'
    };
    res.render('index', data);
});

app.use('/api', api)

app.listen(3069, () => console.log('READY Amjilttai backend server aslaa: 3069'))