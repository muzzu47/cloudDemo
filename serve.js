require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());


//connection to db
const url = process.env.DB_URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connection to DB successfull...");
}).catch((err) => {
    console.log("error while connecting to db..", err);
});


const port = process.env.PORT || 3000

//connection to port
app.listen(port, (err, data) => {
    console.log(`Server listening on ${port} port`);
})
