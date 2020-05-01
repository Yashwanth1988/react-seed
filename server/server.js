
const users = require('./dummy.json')
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
const port = 3000


app.use(express.json())
// app.use(express.urlencoded({
//     extended: true
// }))

app.get('/', (req,res) =>  {
     res.sendFile(path.join(__dirname, '../index.html'));
 })

app.get('/dist/*.js', (req,res) =>  {
    res.sendFile(path.join(__dirname, '../dist/bundle.js'));
})

app.get('/api/user/:id', function(req, res) {
	const { id } = req.params
	const foundUser = users.find(user => user.id == id)
	res.json(foundUser)
})

app.get('/api/users', function(req, res) {
	res.json(users)
})

app.post('/api/user', function(req, res) {
	console.log('req.body',  req.body)
	const { id, username } = req.body
	users.push({
		id,
		username
	})
	res.json(users)
})

app.delete('/api/user/:id', function(req, res) {
	const { id } = req.params
	const foundUsers = users.filter(user => user.id != id)
	res.json(foundUsers)
})

app.put('/api/user/:id', function(req, res) {
	const { id } = req.params
	const { username } = req.body
	const updatedUsers = users.map(function(user){
		if(user.id == id){
			return { id, username }
		}
		return user
	})
	res.json(updatedUsers)
})


app.listen(port, () => console.log(`Example app listening on port ${port}`))

