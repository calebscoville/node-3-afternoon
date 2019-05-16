require('dotenv').config()
const express = require('express')
const massive = require('massive')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('database set')
    app.set("db", dbInstance)
    
app.use(express.json())    
    
    app.listen(process.env.SERVER_PORT, () => console.log(`You are very blessed my son on ${SERVER_PORT}`))
})