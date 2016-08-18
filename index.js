// Require gender detection module
var gender = require('gender-detection');
//Converter Class
var json2csv = require('json2csv');
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
var fs = require("fs");

fs.createReadStream('./import.csv').pipe(converter);

converter.on("end_parsed", function (jsonArray) {

  var buyers = getGender('Buyer');
  var recipients = getGender('Recipient');

  toCSV('Buyer',buyers);
  toCSV('Recipient',recipients);

  function getGender(person){

    var output = [];

    var male = female = unisex = unknown = 0;

    for (var i = 0; i < jsonArray.length; i++) {

      var user = jsonArray[i];

      var theGender = gender.detect(user[person]);

      user[person+'Gender'] = theGender;
      output.push(user);

      switch(theGender) {
        case 'male': male++
          break;
        case 'female': female++
          break;
        case 'unisex': unisex++
          break;
        case 'unknown': unknown++
          break;
      }
    }
    console.log('Results for the ' + person + ':');
    console.log('Male: ' + male);
    console.log('Female: ' + female);
    console.log('Unisex: ' + unisex);
    console.log('Unknown: ' + unknown);
    return output;
  }

  function toCSV(name,obj,headers){
    var headers = ["Merchant Name","Buyer","Recipient","Address","City","State","Postal Code","Country","Email","Phone","Purchase Date","Order #","Item Price","Order Total","Product","SKU",name+"Gender"];
    try {
      var output = json2csv({ data: obj, fields: headers });
    } catch (err) {
      // Errors are thrown for bad options, or if the data is empty and no fields are provided.
      // Be sure to provide fields if it is possible that your data array will be empty.
      console.error(err);
    }

     fs.writeFile('./' + name + '-output.csv',output, function(err){
       if(err) {
         return console.log(err)
       }
     })

  }
});
