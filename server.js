const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const user = require("./User/userController");
const blog = require("./blog/blogController")

const app = express();

app.use(express.json())
app.use(cookieParser())

app.use("/api/app", user);
app.use("/api/app", blog)

async function db () {
    try{
        await mongoose.connect("mongodb://localhost:27017/app");
        console.log('Data base is  connected');

    }catch(e) {
        throw e;
    }
}

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening on ${port}`);
    db()
})

