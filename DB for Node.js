### Docker
```
docker pull mongo                           

// -p mapping port local:docker
docker run --name mongodb -p 37017:27017 -d mongo   -d background

docker ps

docker start mongodb

docker pull mysql
docker run --name mysql -p 3406:3306 -e MYSQL_ROOT_PASSWORD=mypassword -d mysql
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
       console.log(`inserted ${result.length}`)
       db.close();
    })
    .catch( err => {
       process.exit()
    })
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

### MySQL
* mysql workbench
* npm mysql2

```js
function insert(connection, data, cb) {
  const values = [];
  const sql = 'INSERT INTO coinvalues (valuedate, coinvalue) VALUES ?';
  Object.keys(data).forEach((key) => {
    values.push([key, data[key]]);
  });
  connection.query(sql, [values], cb);
}

const connection = mysql.createConnection({
  host:, port, 
})

connection.connect((err) => {
  fetchFromAPI((err, data) => {
    insert(connection, [...], () => {})
  });
})
```

### Sequelize - OR Mapper

