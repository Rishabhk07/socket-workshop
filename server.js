/**
 * Created by rishabhkhanna on 02/12/17.
 */
const express = require('express');
const app = express();

app.get('/', function (req,res) {
    console.log(req.query);
    let name = req.query.name;
    res.send("<H1>"+ name +"</H1>");
})

app.get('/rishabh',function (req,res) {
    res.send("Khanna");
})

app.listen(9090,function () {
    console.log("server has started");
})