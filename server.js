//define varible
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const User = require("./models/UserModel");
const Project = require("./models/projectModel");
const Tool = require("./models/toolModel");
const Community = require("./models/communityModel");
const bodyParser = require('body-parser');

//database
mongoose.connect(
    'mongodb+srv://WebHouse:max2666z!@cluster0.a6krzpb.mongodb.net/server5?retryWrites=true&w=majority',
    { useNewUrlParser: true }
)


app.set('view engine','ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//post data
app.post('/users',async (req,res)=>{
    var newUser = new User(req.body)
    newUser.save()
    .then(item => {
        res.send("item saved to database")
    })
    .catch(err => {
        res.status(400).send("unable to save to database")
    })
})

app.post('/projects',async (req,res)=>{
    var newProject = new Project(req.body)
    newProject.save()
    .then(item => {
        res.send("item saved to database")
    })
    .catch(err => {
        res.status(400).send("unable to save to database")
    })
})


app.post('/tools',async (req,res)=>{
    var newTool = new Tool(req.body)
    newTool.save()
    .then(item => {
        res.send("item saved to database")
    })
    .catch(err => {
        res.status(400).send("unable to save to database")
    })
})

app.post('/communitys',async (req,res)=>{
    var newCommunity = new Community(req.body)
    newCommunity.save()
    .then(item => {
        res.send("item saved to database")
    })
    .catch(err => {
        res.status(400).send("unable to save to database")
    })
})



//get data all
app.get('/users',async (req,res) => { 
    var data = await User.find({})
    res.render("index",{project:data})
})

app.get('/projects',async (req,res) => {
    var data = await Project.find({})
    res.render("index",{project:data})
})

app.get('/tools',async (req,res) => {
    var data = await Tool.find({})
    res.render("index",{project:data})
})

app.get('/communitys',async (req,res) => {
    var data = await Community.find({})
    res.render("index",{project:data})
})



//get single data 




app.listen(8888);
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` })
})