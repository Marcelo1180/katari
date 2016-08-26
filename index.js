// INSTALACION BASE
// =============================================================================
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
var router = express.Router();              // get an instance of the express Router
router.get('/', function(req, res) {
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/katari';
    MongoClient.connect(url, function(err, base) {
        if (err) {
            console.log(err);
            return;
        }
        var persona = base.collection('persona');
        var hernan = {nombre: 'Marcelo', apellido: 'Arteaga', materno: 'Gutierrez'};
        persona.insertOne(hernan, function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            console.log('id: ', result.insertedId);
        });
    });

    res.json({ message: 'hooray! welcome to our api!' });
});
app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);



/*
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function (err, base) {
    if (err) {
        console.log(err);
        return;
    }
    var ususarios = base.collection('usuarios');

    ususarios.find({}).skip(20).limit(10);

});
*/