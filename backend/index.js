const express = require('express')

const app = express()

app.use(express.json())

app.listen(3200,() => {
    console.log('listening on port')
})