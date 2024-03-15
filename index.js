const getSchedule = require('./components/getSchedule')
const getNewsAll = require('./components/getNewsAll')
//DELETE
let amountOfReq = 1
function clog() {
	console.log('Отправлен запрос на сервер!', amountOfReq)
	amountOfReq++
}
//DELETE

//server
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())

app.get(`/schedule/`, (req, res) => {
	console.log(req.query)
	const class_name = req.query.class_name
	const day = req.query.day
	const data = getSchedule(class_name, day)
	res.json(data)
	res.end()
	clog()
})

app.get(`/news/all`, (req, res) => {
	const data = getNewsAll()
	res.json(data)
	res.end()
	clog()
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
