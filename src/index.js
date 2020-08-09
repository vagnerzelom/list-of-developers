const express = require("express");
const {uuid,isUuid}= require("uuidv4");

const app = express();

app.use(express.json());

let lists={
    devoloper:[]
};

function validateListId(req,res,next){
    const{id}=req.params;
    if(!isUuid(id)){
        return res.status(400).json({error:"param sent is not a valit"})
    }
    next();
}

function validateName(req,res,next){
    const {name,lastName}=req.body;
    if(!name||!lastName){
        return res.status(400).json({erro:"All the fields must be filled"})
    }
    next();
};


app.use("/devoloper/:id",validateListId);

app.get("/devoloper",(req,res)=>{
    return res.json(lists);
})

app.post("/devoloper",validateName,(req,res)=>{
    const id = uuid();
    const {name,lastName,years,company,technologies}=req.body;

    const list = {id,name,lastName,years,company,technologies};

    lists.devoloper.push(list)

    

    return res.json(list);

})

app.put("/devoloper/:id",validateName,(req,res)=>{
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

app.delete("/devoloper/:id",(req,res)=>{
    const {id} =req.params;

    const {name,lastName,years,company,technologies}= req.body;

    const listIndex = lists.devoloper.findIndex((list)=>list.id == id);

    if(listIndex < 0){
        return res.status(400).json({ERROR:"this programmer does not exist"});
        }
          
     lists.devoloper.splice(listIndex,1);

     return res.status(204).send();
    
})



const port = 3344;

app.listen(port,()=>{
    console.log(`servidor ok ${port}`);
});