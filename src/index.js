const express = require("express");
const {uuid}= require("uuidv4");

const app = express();

app.use(express.json());

const list=[];




const port = 3344;

app.listen(port,()=>{
    console.log(`servidor ok ${port}`);
});