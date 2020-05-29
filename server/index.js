require('dotenv').config()

const express = require('express'),
    massive = require('massive'),
    cors = require('cors'),
    ctrl = require('./controller'),
    {SERVER_PORT, CONNECTION_STRING} = process.env,
    port = SERVER_PORT

const app = express()

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
})

app.use(express.json())

app.use(cors())

app.get('/api/inventory', ctrl.getAll)

app.get('/api/inventory/:id', ctrl.getOne)

app.post('/api/inventory', ctrl.addItem)

app.put('/api/inventory/:id', ctrl.editItem)

app.delete('/api/inventory/:id', ctrl.deleteItem)

app.listen(port, () => console.log(`Listening on port ${port}`))