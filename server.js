const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

mongoose.connect('mongodb+srv://david:davidtest@cluster0.j3anv.mongodb.net/<Cluster0>?retryWrites=true&w=majority',{useNewUrlParser:true})
const connection = mongoose.connection;
connection.once('open', function(){
    console.log('mongodb ')
})
app.get('/', function(req,res){
    console.log('in root');
    res.send({message:'Server is running'})
})

app.listen('port', function(req,res){
    console.log('listening on port 3000')
})