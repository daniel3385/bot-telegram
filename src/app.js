
const bot = require('./bot')

const mongo = require('mongodb')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
    if (err) throw err;
    let dbo = db.db("mydb");
    dbo.collection("config").findOne({}, function(err, result) {
	if (err) throw err;
	console.log(result.token);
	db.close();
	return bot.boot(result.token)
    });
});
