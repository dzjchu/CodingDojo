const express = require("express")
const path = require("path")

const app = express()
const bodyParser = require("body-parser")

var PORT = 8000

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "./client/dist")))

require("./server/config/mongoose.js")

require("./server/config/routes.js")(app)

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})