var validate = require("validate.js");
module.exports = validate;

/*const email_re = /^\d{4,}$/;
function emailValidador(nit){
    return emailRegex.test(nit);
}*/
/* *
 Model field	Form field
 AutoField	Not represented in the form
 BigAutoField	Not represented in the form
 BigIntegerField	IntegerField with min_value set to -9223372036854775808 and max_value set to 9223372036854775807.
 BooleanField	BooleanField
 CharField	CharField with max_length set to the model field’s max_length
 CommaSeparatedIntegerField	CharField
>DateField	DateField
>DateTimeField	DateTimeField
>DecimalField	DecimalField
>EmailField	EmailField
 FileField	FileField
 FilePathField	FilePathField
 FloatField	FloatField
 ForeignKey	ModelChoiceField (see below)
 ImageField	ImageField
>IntegerField	IntegerField
 IPAddressField	IPAddressField
 GenericIPAddressField	GenericIPAddressField
 ManyToManyField	ModelMultipleChoiceField (see below)
 NullBooleanField	NullBooleanField
 PositiveIntegerField	IntegerField
 PositiveSmallIntegerField	IntegerField
 SlugField	SlugField
 SmallIntegerField	IntegerField
 TextField	CharField with widget=forms.Textarea
 TimeField	TimeField
>URLField  URLField
* */
/*
const integer_re = /^[-+]?\d+$/;//Solo introduzca numeros del 0 al 9
function integerValidador(email) {
 return integer_re.test(email);
}

const bool_re = /^0|1$/;
function boolValidador(email) {
    return bool_re.test(email);
}

const email_re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function emailValidador(email) {
    return email_re.test(email);
}

const date_re = /^(\d{1,2})-(\d{1,2})-(\d{4})$/
function dateValidador(email) {

}
var m = str.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
return (m) ? new Date(m[3], m[2]-1, m[1]) : null;

module.exports = {
 integer: integerValidador,
 bool: boolValidador,
 email: emailValidador
};
*/

/*db.prueba01.insert(
    {
     username: {
      presence: true,
      exclusion: {
       within: ["nicklas"],
       message: "'%{value}' is not allowed"
      }
     },
     password: {
      presence: true,
      length: {
       minimum: 6,
       message: "must be at least 6 characters"
      }
     }
    }
)*/
/*
db.prueba01.insert(
    {
     tipo:"unop",
     validacion: {
      key1: {length: {is: 3}},
      key2: {length: {minimum: 20}},
      key3: {length: {maximum: 3}},
      key4: {
       length: {
        minimum: 3,
        tooShort: "needs to have %{count} words or more",
        tokenizer: function (value) {
         return value.split(/\s+/g);
        }
       }
      }
     }
    }
)
*/

/*var values = {
 key1: "wrong length",
 key2: "too short",
 key3: "too long",
 key4: "too short"
};
validate(values, constraints);
*/
