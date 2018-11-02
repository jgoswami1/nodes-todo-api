const mongoclient = require('mongodb').MongoClient;

mongoclient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Could not connect to mongodb',err);
  }
  console.log('Connected successfully to server');

  const db = client.db('ToDoApp');
  db.collection('Todos').insertOne({
    name : 'Jayanta',
    Location : 'Waterloo'}, (err, result) => {
    if (err){
      return console.log('2nd error loop', err);
    }
    console.log('Insert Result: ', result.ops);
  });

  client.close();
});
