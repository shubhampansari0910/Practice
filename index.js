Joi = require('joi');
config = require('./config.json');
geolocation_distance = require('geolocation-utils');
courses= module.exports=require('./db');
express =module.exports= require('express');
functions = module.exports= require('./functions');
promogen = require('./promogenerator'); 




const app =express();
const bodyParser = require('body-parser');
const promocode = require('./promocode');


var currentDate = new Date();
console.log("promocode geeeen",promogen());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use('/promo',promocode);

app.listen(3001, () => {
    console.log(`listening on port : 3001`);
});
 

//getCourses();


//** mongo import terminal command */

//mongoimport --db mongodb-file --collection courses --file exersize.json --jsonArray 
