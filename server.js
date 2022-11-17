const express = required('express');
const app = express();
const mongoose = required("mongoose");
const User = require("./models/UserModel");
const Project = require("./models/projectModel");
const Tool = require("./models/toolModel");
const Community = require("./models/communityModel");

mongoose.connect(
    'mongodb+srv://WebHouse:max2666z!@cluster0.a6krzpb.mongodb.net/fifa?retryWrites=true&w=majority',
    { useNewUrlParser: true }
)

app.set('view engine','ejs')
app.listen(9999);
