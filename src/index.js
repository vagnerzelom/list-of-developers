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

app.put("/devoloper/:id",(req,res)=>{
    const {id} =req.params;

    const {name,lastName,years,company,technologies}= req.body;

    const listIndex = lists.devoloper.findIndex((list)=>list.id == id);

    if(listIndex < 0){
        return res.status(400).json({ERROR:"this programmer does not exist"});
        }
     const list = {id,name,lastName,years,company,technologies};
     
     lists.devoloper[listIndex]=list;

     return res.json(list);
    
})



const port = 3344;

app.listen(port,()=>{
    console.log(`servidor ok ${port}`);
});