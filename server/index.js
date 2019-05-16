require('dotenv').config()
const express = require('express')
const massive = require('massive')
const products_controller = require("./products_controller")

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
.then((dbInstance) => {
    app.set('db', dbInstance);
})
  .catch(err => console.log(err)) 
    
app.use(express.json())  

app.post('/api/products', products_controller.create);
app.get('/api/products')

    
    app.listen(process.env.SERVER_PORT, () => console.log(`You are very blessed my son on ${SERVER_PORT}`))
