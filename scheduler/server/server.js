const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const massive = require('massive')
require('dotenv').config();
const cntrl = require('./cntrl')

const app = express()

app.use(bodyParser.json())
app.use(cors())

let { CONNECTION_STRING, SERVER_PORT } = process.env;

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
})

app.get('/api/events', cntrl.eventList)

app.get('/api/classRoster',cntrl.roster)

app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`)
})