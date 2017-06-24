const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err) {
        return console.log("Error Connecting to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').insertOne({
    //     text : "Something to do more",
    //     completed : false
    // },(err, result) => {
    //     if (err) {
    //         return console.log('Error while inserting to Todos',err)
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });

    db.collection('Users2').insertOne({
        name : "kanhery",
        age : 64,
        location : "Indore"
    },(err, result) => {
        if (err) {
            return console.log('Error while inserting to Todos',err)
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    });

    db.close();
})