const express = require('express');
const app = express();
const mongoose = require("mongoose");
const User = require("./models/UserModel");
const Project = require("./models/projectModel");
const Tool = require("./models/toolModel");
const Community = require("./models/communityModel");
const bodyParser = require('body-parser');

mongoose.connect(
    'mongodb+srv://WebHouse:max2666z!@cluster0.a6krzpb.mongodb.net/server5?retryWrites=true&w=majority',
    { useNewUrlParser: true }
)

app.set('view engine','ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.post('/users',async (req,res)=>{
    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        bio: req.body.bio,
        project: req.body.project
    }
    console.log("okay")
    res.status(201).send('Create user')
})
app.post('/project',async (req,res)=>{
    const newProject = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        bio: req.body.bio,
        project: req.body.project
    }
    console.log("okay")
    res.status(201).send('Create project')
})
app.post('/tools',async (req,res)=>{
    const newTool = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        bio: req.body.bio,
        project: req.body.project
    }
    console.log("okay")
    res.status(201).send('Create tool')
})
app.post('/communitys',async (req,res)=>{
    const newCommunity = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        bio: req.body.bio,
        project: req.body.project
    }
    console.log("okay")
    res.status(201).send('Create community')
})



//get data
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



app.listen(9999);
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` })
})