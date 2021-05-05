const { date } = require("joi");

var router = express.Router();

router.post('/',(req,res)=>{
    var {error} = Joi.object(functions.schema).validate(req.body);
    //new Joi.ValidationError(req.body,functions.schema);
    if(!error){
        functions.createCode(req.body).then((result)=>{
            console.log("resultttt",result);
            res.status(200).send(result)
        })
        .catch((err)=>{
            console.log("error",err);
            res.status(500).send(err);
        })
    }
    else {
        res.status(400).send(error.message);
    }
    
})


router.get('/',(req,res)=>{
    let data = req.query;
    functions.getCode(data)
    .then((result)=>{
        res.status(200).send({result});
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
})

router.get('/apply/:code?',functions.trackLocation,(req,res)=>{
    var queryParams = req.query;
    let data = req.query;
    if(req.params){
         data = req.params;
    }
    functions.getCode(data)
    .then((result)=>{
        let d1 = new Date();
        let d2 = new Date(result[0].ExpiryDate);
        let days = ((d2 -d1)/(1000 * 3600 * 24));
        (result[0].isActive && days>0)?res.status(200).send({"message":"promo code applied succesfully"}):res.status(403).send({"message":"Invalid Promocode"});
    })
    .catch((err)=>{
        console.log("error",err);
        res.status(500).send(err);
    })
})

router.put('/:code',(req,res)=>{
    console.log("resultttt");
        let query = req.params;
        let data = {
            isActive:req.body.isActive
        }
    functions.updateCode(query,data)
    .then((result)=>{
        res.status(200).send(result);
    })
    .catch((err)=>{
        console.log("error",err);
        res.status(500).send(err);
    })
})


module.exports = router;