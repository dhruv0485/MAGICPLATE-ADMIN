require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const app = express()

const cakeRoute = require('./Cake')
const MacronsRoute = require('./Macrons')
const CookiesRoute = require('./Cookies')
const DonutsRoute = require('./Donuts')
const PastriesRoute = require('./Pastries')
const PORT = process.env.PORT || 3000

const Cake = require('./models/CakeSchema')
const Macrons = require('./models/MacronsSchema')
const Cookie = require('./models/CookiesSchema')
const Donuts = require('./models/DonutsSchema')
const Pastries = require('./models/PastriesSchema')

const mongodbPassword = process.env.MONGODB_PASSWORD;

app.use(bodyparser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '..', 'build')))
app.use(cors())
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
mongoose.connect(`${mongodbPassword}/MagicPlate-Admin`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => {
        console.log("MongoDB successfully connected")
    })

    .catch((error) => {
        console.log("MongoDB is not successfully connected", error)
        process.exit(1)
    })

const newRegisterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
})

const newRegister = mongoose.model('newRegister', newRegisterSchema)

app.post('/signup', async (req, res) => {
    try {
        const newregister = new newRegister(req.body)
        await newregister.save()
        res.status(201).json({
            message: "Admin Data successfully stored",
            data: newregister
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Admin Data not successfully stored",
            error: error.message
        })
    }
})

app.post('/login', async (req, res) => {
    const {username,password} = req.body
    try {
        const user = await newRegister.findOne({username})
        if(!user){
            return res.status(401).json({message:"Invalid username or password"})
        }
        if(user.password != password){
            return res.status(401).json({message:"Invalid username or password"})
        }
        return res.status(200).json({message:"Login Successful",user})
    } catch(error) {
        res.status(500).json({message:"Error logging in",error:error.message})
    }
})

app.use('/api/cakes',cakeRoute)
app.use('/api/macrons',MacronsRoute)
app.use('/api/cookies',CookiesRoute)
app.use('/api/donuts',DonutsRoute)
app.use('/api/pastries',PastriesRoute)
app.get('/api/products', async(req,res) => {
    try {
        const cakes = await Cake.find()
        const macrons = await Macrons.find()
        const cookies = await Cookie.find()
        const donuts = await Donuts.find()
        const pastries = await Pastries.find()
        const allProducts = [
            ...cakes.map(cake => ({ ...cake.toObject(), category: 'Cake'})),
            ...macrons.map(macron => ({ ...macron.toObject(), category: 'Macrons'})),
            ...cookies.map(cookie => ({ ...cookie.toObject(), category: 'Cookies'})),
            ...donuts.map(donut => ({ ...donut.toObject(), category: 'Donuts' })),
            ...pastries.map(pastrie => ({ ...pastrie.toObject() , category: 'Pastries'}))
        ]
        res.json(allProducts)
    } catch(error){
        res.status(500).json({message: "Error fetching products",error:error.message})
    }
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})