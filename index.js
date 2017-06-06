var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;

function withConnection(fnc, cb){
  MongoClient.connect(process.env.MONGODB_URI, function(err, db) {
    console.log("Connected successfully to server");
    fnc(db, cb);
    db.close();
  });
}

function getTasks(db, cb){
  var tasksCol = db.collection('tasks');
  tasksCol.find({}).toArray(function(err, docs){
    cb(docs);
  });
}

function saveTasks(tasks){
  return function storeTasks(db, cb){
    var tasksCol = db.collection('tasks');
    tasksCol.insertMany(tasks, function(err, result){
      cb(result.result.ok === 1);
    });
  }
}

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'));

app.post('/tasks', function(request, response) {
  withConnection(saveTasks(request.body), function(success){
    response.send({success: success});
  });
});

app.get('/tasks', function(request, response) {
  withConnection(getTasks, function(tasks){
    response.send(tasks);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

