var express = require('express');
var router = express.Router();
var fs = require('fs');

var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, database) => {
    if (err) return console.log(err)
    db = database.db('exam')
})

router.get('/', (req, res) => {
    db.collection('students').find().toArray((err, result) => {
        if (err) return
        res.render('list.ejs', { students: result})
    })
});

router.post('/add', (req,res) => {
    db.collection('students').insertOne(req.body, (err,result) => {
        if(err) return
        res.redirect('/')
    })
})

router.get('/add', (req,res) => {
    res.render('add.ejs',{})
})

module.exports = router; 

