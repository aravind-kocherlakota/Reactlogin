require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api',routes)

/////////////////////
const fs  = require("fs")
const path = require("path");
let mongoCA = fs.readFileSync(
    path.join(__dirname, "ssl", process.env.MONGO_CA)
),
    mongoClient = fs.readFileSync(
        path.join(__dirname, "ssl", process.env.MONGO_CLIENT)
    ),
    mongoKey = fs.readFileSync(
        path.join(__dirname, "ssl", process.env.MONGO_CLIENT)
    );
////////////////////////////delete this ssl from mongo option env and ssl folder

let mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    /////
    sslCA: mongoCA,
    sslCert : mongoClient,
    sslKey : mongoKey
    /////
}

mongoose.connect(process.env.DB_URL, mongoOptions)

mongoose.connection.on("connected",()=>{
    console.log("mongoose connected to mongoDB")
})


app.listen(process.env.PORT,()=>{
    console.log("running on port: "+ process.env.port)
    })