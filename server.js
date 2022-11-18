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



//post data
app.post('/users',async (req,res)=>{
    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        bio: req.body.bio,
        project: req.body.project
    }
    console.log("okay");
    res.json(newUser);
})
app.post('/projects',async (req,res)=>{
    const newProject = {
        projectName: req.body.projectName,
        description: req.body.description,
        picTool: req.body.picTool,
        vote: req.body.vote
    }
    console.log("okay")
    res.json(newProject);
})
app.post('/tools',async (req,res)=>{
    const newTool = {
        toolName: req.body.toolName,
        description: req.body.description,
        picTool: req.body.picTool,
        vote: req.body.vote
    }
    console.log("okay")
    res.json(newTool);
})
app.post('/communitys',async (req,res)=>{
    const newCommunity = {
        pic: req.body.pic,
        head: req.body.head,
        description: req.body.description,
        vote: req.body.vote
    }
    console.log("okay")
    res.json(newCommunity);
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



app.listen(8888);
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` })
})