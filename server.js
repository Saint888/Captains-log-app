// Load express
const express = require('express')

const app = express()
const PORT = 4100
const { createEngine } = require('jsx-view-engine')
const Ship = require('./models/shipModel')
// const pokemon = require('./models/pokemon')

// const pokemonRoute = require('./route/pokemonRoute')

app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

require('dotenv').config()

// Load the connectDB function
const connectDB = require('./config/db')

// Connect to database
connectDB()

// Load the method-override middleware
const methodOverride = require('method-override')

// a middleware that formats the form data (currently a string that looks like query params) into a object we can use
app.use(express.urlencoded({ extended: true }))

// hack into our form and give it more HTTP methods (like DELETE and PUT)
app.use(methodOverride('_method'))

// look for static files (like css) in the public folder
app.use(express.static('public'))

app.get('/', async (req, res) => {

        try {
            // Use the fruit model to interact with the database
            // find will get all documents from the fruit collection
            const result = await Ship.find() 
            console.log('inside controller')
    
            // Looks in the views folder for "fruits/Index" and passes { fruits } data to the view (kind of like a server props object)
            res.render('Index', { Ship: result })
        } catch(err) {
            console.log(err)
            res.send(err.message)
        }
    })

app.get('/newship', (req, res) => {
    res.render('New')
})

app.post('/logs', async (req, res) => {
        // POST /logs
    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        // use the model to interact with db and create a new document in the fruit collection
        const result = await Ship.create(req.body)
        console.log(result)
        res.render('Show', {result})
    } catch(err) {
        console.log(err)
    }
    // res.send(req.body)


})


app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})