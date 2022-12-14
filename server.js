//define varible
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/UserModel");
const Project = require("./models/projectModel");
const Tool = require("./models/toolModel");
const Community = require("./models/communityModel");
const bodyParser = require("body-parser");
const eventEmitter = require('events');
const emitter = new eventEmitter.EventEmitter();

//database
mongoose.connect(
  "mongodb+srv://WebHouse:max2666z!@cluster0.a6krzpb.mongodb.net/server5",
  { useNewUrlParser: true }
);

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));



//Home page
app.post("/project/post", async (req, res) => {
  var newProject = new Project(req.body);
  newProject
    .save()
    .then((item) => {
      res.send(newProject);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

app.get("/home", async (req, res) => {
  var getdata = req.body.selectfil
  var data = await Project.find({});
  var grade10 = await Project.find({filter:["Grade10"]});
  // var grade11 = await Project.find({filter:["Grade11"]});
  // var grade12 = await Project.find({filter:["Grade12"]});
  // var project = await Project.find({filter:["Project"]});
  // var math = await Project.find({filter:["Math"]});
  // var social = await Project.find({filter:["Social"]});
  // var history = await Project.find({filter:["History"]});
  // var physics = await Project.find({filter:["Physics"]});
  // var biology = await Project.find({filter:["Biology"]});
  // let Storage = [{}];
  
  console.log(getdata)
  res.render("index", { tiwme: data });
});

app.put("/project/update/:projectId", async (req, res) => {
  Project.findOneAndUpdate({ _id: req.params.projectId }, req.body, {
    new: true,
  })
    .then((item) => {
      res.send("data had been update to database");
    })
    .catch((err) => {
      res.status(400).send("unable to update data to database");
    });
});

app.delete("/project/delete/:projectId", async (req, res) => {
  Project.deleteOne({ _id: req.params.projectId })
    .then((item) => {
      res.send("data had been delete in database");
    })
    .catch((err) => {
      res.status(400).send("unable to delete data in database");
    });
});



//Community page
app.post("/community/post", async (req, res) => {
  var newCommunity = new Community(req.body);
  newCommunity
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

app.get("/communitypage", async (req, res) => {
  var data = await Community.find({});
  res.render("index", { project: data });
});

app.put("/community/update/:communityId", async (req, res) => {
  Community.findOneAndUpdate({ _id: req.params.communityId }, req.body, {
    new: true,
  })
    .then((item) => {
      res.send("data had been update to database");
    })
    .catch((err) => {
      res.status(400).send("unable to update data to database");
    });
});

app.delete("/community/delete/:communityId", async (req, res) => {
  Community.deleteOne({ _id: req.params.communityId })
    .then((item) => {
      res.send("data had been delete in database");
    })
    .catch((err) => {
      res.status(400).send("unable to delete data in database");
    });
});



//Tool page
app.post("/tool/post", async (req, res) => {
  var newTool = new Tool(req.body);
  newTool
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

app.get("/toolpage", async (req, res) => {
  var data = await Tool.find({});
  res.render("index", { project: data });
});

app.put("/tool/update/:toolId", async (req, res) => {
  Tool.findOneAndUpdate({ _id: req.params.toolId }, req.body, { new: true })
    .then((item) => {
      res.send("data had been update to database");
    })
    .catch((err) => {
      res.status(400).send("unable to update data to database");
    });
});

app.delete("/tool/delete/:toolId", async (req, res) => {
  Tool.deleteOne({ _id: req.params.toolId })
    .then((item) => {
      res.send("data had been delete in database");
    })
    .catch((err) => {
      res.status(400).send("unable to delete data in database");
    });
});



//user data
app.post("/user/post", async (req, res) => {
  var newUser = new User(req.body);
  newUser
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

app.get("/userdata", async (req, res) => {
  var data = await User.find({});
  res.render("index", { project: data });
});

app.put("/user/update/:userId", async (req, res) => {
  User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true })
    .then((item) => {
      res.send("data had been update to database");
    })
    .catch((err) => {
      res.status(400).send("unable to update data to database");
    });
});

app.delete("/user/delete/:userId", async (req, res) => {
  User.deleteOne({ _id: req.params.userId })
    .then((item) => {
      res.send("data had been delete in database");
    })
    .catch((err) => {
      res.status(400).send("unable to delete data in database");
    });
});



//Read page
app.get("/Project/:id", async (req, res) => {
  Project.findById(req.params.id, (err, project) => {
    if (err) res.send(err);
    res.render("read", { tiwme: project });
    });
});



app.listen(8888);
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});