// INSTALACION BASE
// =============================================================================
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

//var validacion = require('./validacion');
//var validate = require("validate.js");
var validate = require("./katari/core/validacion");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
var router = express.Router();              // get an instance of the express Router
router.get('/', function(req, res) {
    var datos_personales = {nombre: 'Marcelo', apellido: 'Arteaga', materno: 'Gutierrez', email: '@gmail.com', sw: 1, entero:'1234'};
    var validador = {
        "version":1,
        "validator": "^5.5.0",
        "validaciones":{
            "emailField":{
                "email": true
            },
            "dateField":{
                "dateOnly": true
            },
            "dateTimeField":{
                "datetime": true
            },
            "integerField":{
                "numericality": {
                    "onlyInteger": true,
                    "strict": true
                }
            },
            "decimalField":{
                "numericality": {
                    "strict": true
                }
            },
            "URLField":{
                "url": true
            }
        }
    };
    var formulario_esquema = {
        "variable1":{
            "etiqueta": "Variable #º1",
            "mascara": "",
            "placeHolder": "",
            "readOnly": false,
            "isUnique": false,
            "formula": ""
        },
        "variable2":{
            "etiqueta": "Variable #º2",
            "mascara": "",
            "placeHolder": "",
            "readOnly": false,
            "isUnique": false,
            "formula": ""
        },
        "variable3":{
            "etiqueta": "Variable #º3",
            "mascara": "",
            "placeHolder": "",
            "readOnly": false,
            "isUnique": false,
            "formula": "(variable1 + variable2 + 5)/3"
        },
        validaciones:{
            "variable1":{
                "email": true,
                "length": {
                    "minimum": 10,
                    "maximum": 15
                }
            },
            "variable2":{
                "numericality": {
                    "onlyInteger": true,
                    "strict": true
                }
            },
            "variable3":{
                "numericality": {
                    "strict": true
                }
            }
        },
        extraValidaciones:{//Solo en frontend, antes de ejecutar solicita guardar
            activo: false,
            script: "validate.validators.custom = function(value, options, key, attributes) {return 'is totally wrong';};"
        }
    };
    var datos = {
        "variable1":"marce@gmail.com",
        "variable2":"1234",
        "variable3":"1234.4"
    }
    data22 = validate(datos, formulario_esquema.validaciones);
    if(data22){
        console.log(data22);
    }
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