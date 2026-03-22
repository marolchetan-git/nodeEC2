const express = require("express")
const os = require('os')

const app = express()
const PORT = 3000

const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces)

app.get("/", (req, res) =>{
    res.json(networkInterfaces)
})

app.listen(PORT, () =>{
    console.log(`App is running in port: ${PORT} `)
})