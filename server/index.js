require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('database set')
    app.listen(process.env.SERVER_PORT, () => console.log(`You are very blessed my son on ${SERVER_PORT}`))
})