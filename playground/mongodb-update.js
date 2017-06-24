//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err) {
        return console.log("Error Connecting to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Users').findOneAndUpdate({name: 'kanhery'},
    //    { $set: {location : 'Pune'}}, 
    //    {returnOriginal : false}).then((result) => {
    //        console.log(result);
    //    });

    db.collection('Users').findOneAndUpdate({_id: new ObjectID('594d4379b0d5d63c75de0bc4')},
    {$inc: {age:1}},
    {returnOriginal : false}).then ((result) => {
        console.log(result);
    })


//    db.close();
})