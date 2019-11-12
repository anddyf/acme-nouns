const express = require('express')
const path = require('path')
const PORT = 3000
const {
    db,
    seed,
    people,
    places,
    thingy
} = require('./db.js')

const app = express()

app.get ( '/api/people', (req , res, next ) => {
    people.findAll()
    .then(people =>{
        res.send(people)
    })
    .catch(er => console.log(er))
})

app.get ( '/api/places', (req , res, next ) => {
    places.findAll()
    .then(places =>{
        res.send(places)
    })
    .catch(er => console.log(er))
})

app.get ( '/api/thingy', (req , res, next ) => {
    thingy.findAll()
    .then(thing =>{
        res.send(thing)
    })
    .catch(er => console.log(er))
})

app.get( '/', ( req, res,next)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

db.sync({force : true})
.then( () => seed())
.then( () => {
    app.listen ( PORT, ()=> {
        console.log('success')
    })
})


