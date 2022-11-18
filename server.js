const express = require('express');
const app = express();
const mongoose = require("mongoose");
const User = require("./models/UserModel");
const Project = require("./models/projectModel");
const Tool = require("./models/toolModel");
const Community = require("./models/communityModel");
const bodyParser = require('body-parser');

mongoose.connect(
    'mongodb+srv://WebHouse:max2666z!@cluster0.a6krzpb.mongodb.net/fifa?retryWrites=true&w=majority',
    { useNewUrlParser: true }
)

app.set('view engine','ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.post('/user',async (req,res)=>{
    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        bio: req.body.bio,
        project: req.body.project
    }
    console.log(newUser)
    res.render("index",{project:newUser})
})



//get data
app.get('/user',async (req,res)=>{
    var data = await User.find({})
    res.render("index",{project:data})
})
app.get('/project',async (req,res)=>{
    var data = await Project.find({})
    res.render("index",{project:data})
})
app.get('/tool',async (req,res)=>{
    var data = await Tool.find({})
    res.render("index",{project:data})
})
app.get('/community',async (req,res)=>{
    var data = await Community.find({})
    res.render("index",{project:data})
})

app.listen(9999);
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` })
})