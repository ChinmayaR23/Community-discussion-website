const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
const quest = require('./model/model')
app.use(cors())
app.use(express.json())

app.post('/stored_answer',async(req,res)=>{
    
    try{
        const result = await quest.create(req.body)
    console.log(result)
    res.send(result)
    } catch(error){
        console.log(error.message);
        res.send({status:'error',message :error.message})
    }
})


mongoose.connect("mongodb://127.0.0.1:27017/project_answer" ,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
app.listen(4000);