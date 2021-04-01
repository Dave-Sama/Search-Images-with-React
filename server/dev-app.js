const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const publicDirectoryPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
	res.sendFile('index.html')
})

app.listen(port, () => {
	console.log(`App is listen to port ${port}`)
})

module.exports = app