require('dotenv').config()
console.log("Hello World");


const express = require('express') // made an object that contains express
const app = express() // now we csn use app.abc
const port = 2000 // set the port our server will be listeing onto

const user = {
    "user" : "Rishabh"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('Rishabh.com')
})

app.get('/login', (req, res) => {
    res.send('<h1> Login Successful</h1>')
})

app.get('/youtube', (req,res) =>{
    res.send('<a href = https://www.youtube.com/watch?v=7fjOw8ApZ1I> link <\a>')
})

//to send json file
app.get('/user', (req,res)=>{
    res.json(user)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`) // search http://localhost:3000
})