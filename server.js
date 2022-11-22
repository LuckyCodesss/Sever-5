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
    'mongodb+srv://WebHouse:max2666z!@cluster0.a6krzpb.mongodb.net/server5',
    { useNewUrlParser: true }
)


app.set('view engine','ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//post data
// app.post('/userx',async (req,res)=>{
//     var newUser = new User(req.body)
//     newUser.save()
//     .then(item => {
//         res.send("item saved to database")
//     })
//     .catch(err => {
//         res.status(400).send("unable to save to database")
//     })
// })

app.post('/home/projectx',async (req,res)=>{
    var newProject = new Project(req.body)
    newProject.save()
    .then(item => {
        res.send("item saved to database")
    })
    .catch(err => {
        res.status(400).send("unable to save to database")
    })
})

// app.post('/toolx',async (req,res)=>{
//     var newTool = new Tool(req.body)
//     newTool.save()
//     .then(item => {
//         res.send("item saved to database")
//     })
//     .catch(err => {
//         res.status(400).send("unable to save to database")
//     })
// })

// app.post('/communityx',async (req,res)=>{
//     var newCommunity = new Community(req.body)
//     newCommunity.save()
//     .then(item => {
//         res.send("item saved to database")
//     })
//     .catch(err => {
//         res.status(400).send("unable to save to database")
//     })
// })



//get all data
// app.get('/users',async (req,res) => { 
//     var data = await User.find({})
//     //res.json(data);
//     res.render("index",{project:data})
// })

app.get('/home',async (req,res) => {
    var data = await Project.find({})
    res.render("index",{tiwme:data})
})

// app.get('/tools',async (req,res) => {
//     var data = await Tool.find({})
//     res.json(data);
//     //res.render("index",{project:data})
// })

// app.get('/communitys',async (req,res) => {
//     var data = await Community.find({})
//     res.json(data);
//     //res.render("index",{project:data})
// })



//get single data 
// app.get('/user',async (req,res) => { 
//     var data = await User.findById(req.params.projectId, (err, project) => {
//         if (err) res.send(err);
//     })
//     res.json(data);
// })

app.get('/project',async (req,res) => {
    var data = await Project.findById(req.params.projectId, (err, project) => {
        if (err) res.send(err);
    })
    res.json(data);
})

// app.get('/tool',async (req,res) => {
//     var data = await Tool.findById(req.params.projectId, (err, project) => {
//         if (err) res.send(err);
//     })
//     res.json(data);
// })

// app.get('/community',async (req,res) => {
//     var data = await Community.findById(req.params.projectId, (err, project) => {
//         if (err) res.send(err);
//     })
//     res.json(data);
// })



app.listen(8888);
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` })
})