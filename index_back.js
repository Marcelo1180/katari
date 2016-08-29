// INSTALACION BASE
// =============================================================================
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

//var validacion = require('./validacion');
var validate = require("validate.js");



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
var router = express.Router();              // get an instance of the express Router
router.get('/', function(req, res) {
    var hernan = {nombre: 'Marcelo', apellido: 'Arteaga', materno: 'Gutierrez', email: 'a@gmail.com', sw: 1, entero:'1234'};

    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/prueba';
    MongoClient.connect(url, function (err, base) {
        if (err) {
            console.log(err);
            return;
        }
        var ususarios = base.collection('prueba01');
        //ususarios.find({}).skip(20).limit(10);
        ususarios.find({tipo:"unop"}).toArray(function(err, docs) {
            //console.log(JSON.stringify(docs[0].validacion))
            //var constraints = eval(JSON.stringify(docs[0].validacion));
            var constraints = docs[0].validacion;
            /*var constraints = {
                key1: {length: {is: 3}},
                key2: {length: {minimum: 20}},
                key3: {length: {maximum: 3}},
                key4: {
                    length: {
                        minimum: 3,
                        tooShort: "needs to have %{count} words or more",
                        tokenizer: function(value) {
                            return value.split(/\s+/g);
                        }
                    }
                }
            };*/
            var values = {
                key1: "wrong length",
                key2: "too short",
                key3: "too long",
                key4: "too short"
            };
            data22 = validate(values, constraints);
            console.log(data22)
        });
        /*
        ususarios.find({tipo:"unop"}).toArray(function(err, docs) {
            console.log(docs[0].validacion);
            var values = {
                key1: "wrong length",
                key2: "too short",
                key3: "too long",
                key4: "too short"
            };
            var constraints = {
                key1: {length: {is: 3}},
                key2: {length: {minimum: 20}},
                key3: {length: {maximum: 3}},
                key4: {
                    length: {
                        minimum: 3,
                        tooShort: "needs to have %{count} words or more",
                        tokenizer: function(value) {
                            return value.split(/\s+/g);
                        }
                    }
                }
            };

            data22 = validate(values, constraints);
            console.log(data22)
        });
        */
    });
    //console.log(validacion.email(hernan.email));
    //console.log(validacion.bool(hernan.sw));
    //console.log(validacion.integer(hernan.entero));

    /*var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/katari';
    MongoClient.connect(url, function(err, base) {
        if (err) {
            console.log(err);
            return;
        }
        var persona = base.collection('persona');
        var hernan = {nombre: 'Marcelo', apellido: 'Arteaga', materno: 'Gutierrez'};
        //console.log(hernan.nombre);
        persona.insertOne(hernan, function (err, result) {
            if (err) {

                console.log(err);
                return;
            }
            console.log('id: ', result.insertedId);
        });
    });*/
    /*var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/prueba');
    var User = mongoose.collection('persona');
    User.find({}, function(err, users) {
        if (err) throw err;
        // object of all the users
        console.log(users);
    });
    */
    res.json({ message: 'hooray! welcome to our api!' });
});
app.use('/api_v1', router);
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