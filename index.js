const express = require("express")
var cors = require('cors')
require("./connection")
var stuModel=require("./Model/Student")
// 1. Consistency: Use one name for your model

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

// 2. Fixed the path: Removed the dot from './add'
app.post('/add', async (req, res) => {
    try {
        await new stuModel(req.body).save()
        res.send("data added")
    } catch (err) {
        res.status(500).send("Error adding data")
    }
})

app.get('/view', async (req, res) => {
    var data = await stuModel.find()
    res.send(data)
})

// 3. Fixed capitalization: findByIdAndDelete
app.delete('/remove/:id', async (req, res) => {
    await stuModel.findByIdAndDelete(req.params.id)
    res.send("data deleted")
})

app.put('/edit/:id', async (req, res) => {
    await stuModel.findByIdAndUpdate(req.params.id, req.body)
    res.send("data updated")
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})