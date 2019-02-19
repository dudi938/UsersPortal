var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/OfakimDB";
var dbName = 'OfakimDB'
var collectionName = 'Users'

function insert(dbName, collection, data){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collection).insert(data, function(err, res) {
          if (err) throw err;
          console.log("document inserted");
          db.close();
        });
    });
}



function getAll(){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);

        dbo.collection(collectionName).find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            });
    });
}

  function deleteAll(){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
    
        dbo.collection(collectionName).deleteMany({}).then((res) => {
            console.log(res)
            db.close();
        });

      });
  }
