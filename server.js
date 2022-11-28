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
app.post('/user/post',async (req,res)=>{
    var newUser = new User(req.body)
    newUser.save()
    .then(item => {
        res.send("item saved to database")
    })
    .catch(err => {
        res.status(400).send("unable to save to database")
    })
})

app.post('/project/post',async (req,res)=>{
    var newProject = new Project(req.body)
    newProject.save()
    .then(item => {
        res.send(newProject)
    })
    .catch(err => {
        res.status(400).send("unable to save to database")
    })
})

app.post('/tool/post',async (req,res)=>{
    var newTool = new Tool(req.body)
    newTool.save()
    .then(item => {
        res.send("item saved to database")
    })
    .catch(err => {
        res.status(400).send("unable to save to database")
    })
})

app.post('/community/post',async (req,res)=>{
    var newCommunity = new Community(req.body)
    newCommunity.save()
    .then(item => {
        res.send("item saved to database")
    })
    .catch(err => {
        res.status(400).send("unable to save to database")
    })
})



//get all data
app.get('/userdata',async (req,res) => { 
    var data = await User.find({})
    res.render("index",{project:data})
})

app.get('/home',async (req,res) => {
    var data = await Project.find({})
    res.render("index",{tiwme:data})
})

app.get('/toolpage',async (req,res) => {
    var data = await Tool.find({})
    res.render("index",{project:data})
})

app.get('/communitypage',async (req,res) => {
    var data = await Community.find({})
    res.render("index",{project:data})
})

// app.get('/home/read',async (req,res) => {
//     var data = await Project.find({})
//     res.render("read",{tiwme:data})
// })


// new
// app.post("/project",async(req,res)=>{
//     console.log(req.body.id);
//     const data =  Project.findById(req.body.id, (err, project) => {
//                 if (err) res.send(err);
//                 res.render("read",{tiwme:data})
//             })
// })
app.get("/Project/:id",async(req,res)=>{
    console.log(req.params.id);
    var data =  Project.findById(req.params.id, (err, project) => {
                if (err) res.send(err);
                res.render("read",{tiwme:data})
            })
})



//get single data 
// app.get('/user',async (req,res) => { 
//     var data = await User.findById(req.params.projectId, (err, project) => {
//         if (err) res.send(err);
//     })
//     res.json(data);
// })

// app.get('/project',async (req,res) => {
//     var data = await Project.findById(req.params.projectId, (err, project) => {
//         if (err) res.send(err);
//     })
//     res.json(data);
// })

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



//update data
app.put('/user/update/:userId',async (req,res) => {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, {new : true})
    .then(item => {
        res.send("data had been update to database")
    })
    .catch(err => {
        res.status(400).send("unable to update data to database")
    })
})

app.put('/project/update/:projectId',async (req,res) => {
    Project.findOneAndUpdate({ _id: req.params.projectId }, req.body, {new : true})
    .then(item => {
        res.send("data had been update to database")
    })
    .catch(err => {
        res.status(400).send("unable to update data to database")
    })
})

app.put('/tool/update/:toolId',async (req,res) => {
    Tool.findOneAndUpdate({ _id: req.params.toolId }, req.body, {new : true})
    .then(item => {
        res.send("data had been update to database")
    })
    .catch(err => {
        res.status(400).send("unable to update data to database")
    })
})

app.put('/community/update/:communityId',async (req,res) => {
    Community.findOneAndUpdate({ _id: req.params.communityId }, req.body, {new : true})
    .then(item => {
        res.send("data had been update to database")
    })
    .catch(err => {
        res.status(400).send("unable to update data to database")
    })
})



//delete data
app.delete('/user/delete/:userId',async (req,res) => {
    User.deleteOne({ _id: req.params.userId })
    .then(item => {
        res.send("data had been delete in database")
    })
    .catch(err => {
        res.status(400).send("unable to delete data in database")
    })
})

app.delete('/project/delete/:projectId',async (req,res) => {
    Project.deleteOne({ _id: req.params.projectId })
    .then(item => {
        res.send("data had been delete in database")
    })
    .catch(err => {
        res.status(400).send("unable to delete data in database")
    })
})

app.delete('/tool/delete/:toolId',async (req,res) => {
    Tool.deleteOne({ _id: req.params.toolId })
    .then(item => {
        res.send("data had been delete in database")
    })
    .catch(err => {
        res.status(400).send("unable to delete data in database")
    })
})

app.delete('/community/delete/:communityId',async (req,res) => {
    Community.deleteOne({ _id: req.params.communityId })
    .then(item => {
        res.send("data had been delete in database")
    })
    .catch(err => {
        res.status(400).send("unable to delete data in database")
    })
})



//user Id
app.post('/userId/post',async (req,res)=>{
    var newUserId = new User(req.body)
    newUserId.save()
    .then(item => {
        res.send(newUserId)
    })
    .catch(err => {
        res.status(400).send("unable to save to database")
    })
})



//filter
app.get("/filter/grade10/:id",async(req,res)=>{
    console.log(req.params.id);
    var data =  Project.findById(req.params.id, (err, project) => {
                if (err) res.send(err);
                res.render("index",{tiwme:data})
            })
})

app.get("/filter/grade11/:id",async(req,res)=>{
    console.log(req.params.id);
    var data =  Project.findById(req.params.id, (err, project) => {
                if (err) res.send(err);
                res.render("index",{tiwme:data})
            })
})

app.get("/filter/grade12/:id",async(req,res)=>{
    console.log(req.params.id);
    var data =  Project.findById(req.params.id, (err, project) => {
                if (err) res.send(err);
                res.render("index",{tiwme:data})
            })
})

app.get("/filter/Project/:id",async(req,res)=>{
    console.log(req.params.id);
    var data =  Project.findById(req.params.id, (err, project) => {
                if (err) res.send(err);
                res.render("index",{tiwme:data})
            })
})

app.get("/filter/Math/:id",async(req,res)=>{
    console.log(req.params.id);
    var data =  Project.findById(req.params.id, (err, project) => {
                if (err) res.send(err);
                res.render("index",{tiwme:data})
            })
})

app.get("/filter/Social/:id",async(req,res)=>{
    console.log(req.params.id);
    var data =  Project.findById(req.params.id, (err, project) => {
                if (err) res.send(err);
                res.render("index",{tiwme:data})
            })
})

app.get("/filter/History/:id",async(req,res)=>{
    console.log(req.params.id);
    var data =  Project.findById(req.params.id, (err, project) => {
                if (err) res.send(err);
                res.render("index",{tiwme:data})
            })
})

app.get("/filter/Physics/:id",async(req,res)=>{
    console.log(req.params.id);
    var data =  Project.findById(req.params.id, (err, project) => {
                if (err) res.send(err);
                res.render("index",{tiwme:data})
            })
})

app.get("/filter/Biology/:id",async(req,res)=>{
    console.log(req.params.id);
    var data =  Project.findById(req.params.id, (err, project) => {
                if (err) res.send(err);
                res.render("index",{tiwme:data})
            })
})



app.listen(8888);
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` })
})