const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const mongoose = require("mongoose");
const quest = require('./model/model')
const quest2 = require('./model/model2');
const quest3 = require('./model/model3');
const quest4 = require('./model/model4');
const quest5 = require('./model/model5');
const { request } = require("express");
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('yes')
})

app.post('/stored',async(req,res)=>{
    
    try{
        
       
        if(req.body.comm == "C++"){
        const result = await quest.create(req.body)
        console.log(result)
        res.send(result)
       
    }
    if(req.body.comm == "AI"){
        console.log("AI")
        const result = await quest2.create(req.body)
        console.log(result)
        res.send(result)
    }
    if(req.body.comm == "APP"){
        console.log("APP")
        const result = await quest3.create(req.body)
        console.log(result)
        res.send(result)
    }
    if(req.body.comm == "UI"){
        console.log("UI")
        const result = await quest4.create(req.body)
        console.log(result)
        res.send(result)
    }

    
    } catch(error){
        console.log(error.message);
        res.send({status:'error',message :error.message})
    }
})
app.post('/stored_login',async(req,res)=>{
    
    try{
        const result = await quest5.create(req.body)
        console.log(result)
        res.send(result)
 
    } catch(error){
        console.log(error.message);
        res.send({status:'error',message :error.message})
    }
})


 app.get('/find_C', async (req, res)=>{
    try {
        const result = await quest.find({});
        res.send({ data:result});
    } catch (error) {
        console.log(error.message);
        res.send({status:'error',message:error.message});
    }
}) 
 app.get('/find_AI', async (req, res)=>{
    try {
        
        const result = await quest2.find({});
        res.send({ data:result});
    } catch (error) {
        console.log(error.message);
        res.send({status:'error',message:error.message});
    }
}) 
 app.get('/find_App', async (req, res)=>{
    try {
        
        const result = await quest3.find({});
        res.send({ data:result});
    } catch (error) {
        console.log(error.message);
        res.send({status:'error',message:error.message});
    }
}) 
 app.get('/find_Ui', async (req, res)=>{
    try {
        
        const result = await quest4.find({});
        res.send({ data:result});
    } catch (error) {
        console.log(error.message);
        res.send({status:'error',message:error.message});
    }
}) 
mongoose.connect("mongodb://127.0.0.1:27017/Final_project",{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
app.listen(5000);