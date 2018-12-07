### Docker
```
docker pull mongo                           

// -p mapping port local:docker
docker run --name mongodb -p 37017:27017 -d mongo   -d background

docker ps

docker start mongodb
```

* Robo 3T - Gui


### Mongo

```js
const MongoClient = rquire('mongodb').MongoClient;
const dsn = 'mongodb://localhost:37017/mydb';

MongoClient.connect(dsn, (err, db) => {
  if (err) throw err;
  const collection = db.collection('value');
  insert(collection, [{ } ....])
    .then((result) => {
       console.log('inserted ${result.length}')
    });

  db.close();
})

function insert(collection, data) {
  const promsiedInserts = [];
  Object.keys(data).forEach((key) => {
    promisedInserts.push(
      collection.insertOne({date: key, value: data[key]}})
    );
  });
  return Promise.all(promisedInserts);
}
```
