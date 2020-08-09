const express = require("express");
const {uuid}= require("uuidv4");

const app = express();

app.use(express.json());

let lists={
    devoloper:[]
};

app.get("/devoloper",(req,res)=>{
    return res.json(lists);
})

app.post("/devoloper",(req,res)=>{
    const id = uuid();
    const {name,lastName,years,company,technologies}=req.body;

    const list = {id,name,lastName,years,company,technologies};

    lists.devoloper.push(list)

    

    return res.json(list);

})



const port = 3344;

app.listen(port,()=>{
    console.log(`servidor ok ${port}`);
});