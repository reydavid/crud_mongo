const express = require('express'); //Import express
const mongoose = require('mongoose'); //Import mongoose library
const port = 8000;
const Kitty = require("./models/kitten.models")

mongoose.connect('mongodb+srv://david:davidtest@cluster0.fbruu.mongodb.net/crud_mongoose?retryWrites=true&w=majority',{useNewUrlParser:true},{ useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', function(){
console.log('mongodb ')
})

    const app = express(); //Initialize new express server
    
    app.get('/', (req,res) => {
        console.log('in root');
        res.send({message:'Server is running...away!!!'})
    })

    app.get('/storeKitty', (req,res){
        let kittyExample = {
            color: 'light brown',
            weight: '500lbs',
            adopted: true
        }
    })
    let newKitty = new Kitty(kittyExample)

    app.listen(port, (req,res) => {
        console.log('listening on port 8000')
    });
