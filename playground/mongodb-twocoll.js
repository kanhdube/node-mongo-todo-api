//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err) {
        return console.log("Error Connecting to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').find({
    //     _id : new ObjectID('594d2c5993ef292468242cbf')
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // })

// The below code is for finding matching rows, from users and users2
    
    db.collection('Users').find().forEach((doc) => {
        db.collection('Users2').findOne({name : doc.name}).then((doc2) => {
            if(doc2) {
            console.log(doc2);
            }
    })
    })


//    db.close();
})