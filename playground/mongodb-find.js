const mongoclient = require('mongodb').MongoClient;

mongoclient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Could not connect to mongodb',err);
  }
  console.log('Connected successfully to server');

  const db = client.db('ToDoApp');

  db.collection('Todos').find().count().then((count) => {
    console.log('COUNT :', count);
  }, (err) => {
    console.log('ERROR :', err);
  })

   db.collection('Todos').find({name: 'Jayanta'}).toArray().then((docs) => {
    console.log("hello   :    ", docs)
  }, (err) => {
    console.log ('some error: ', err);
  });
    client.close();
});

