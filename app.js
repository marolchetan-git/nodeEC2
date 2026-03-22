const express = require("express")
const os = require('os')

const app = express()
const PORT = 3000

const hostname = os.hostname()
app.get("/", (req, res) =>{
    res.json({
        hostname
    })
})

app.listen(PORT, () =>{
    console.log(`App is running in port: ${PORT} `)
})