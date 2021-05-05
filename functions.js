module.exports={

    createCode:async function (data){
        const course = new courses({
            code:promogen(),
            amount:data.amt,
            ExpiryDate:this.addDays(new Date(), data.exp_Days),
            minValue:data.min,
            isActive:data.isActive
         })
         return course.save();
         
         
         
    },
    
    getCode: async function (data){
       return new Promise(function (resolve,reject) {
        resolve(courses.find(data))
       }) 
    
    },

    updateCode: async function (query,data){
      
        return new Promise(function (resolve,reject) {
         resolve(courses.updateOne(query,data))
        }) 
     
     },


    addDays:function (dateObj, numDays) {
        dateObj.setDate(dateObj.getDate() + numDays);
        return dateObj;
     },

     schema : {
            amount:Joi.number().required(),
            ExpiryDate:Joi.number().required(),
            minValue:Joi.number().required(),
            isActive:Joi.boolean().required()
    },

    trackLocation:function(req, res, next){
        if(geolocation_distance.insideCircle(req.body.origin,config.center,config.radius)){
            if(geolocation_distance.insideCircle(req.body.dest,config.center,config.radius)){
                next();
            }
            else{
                res.status(403).send("your dest is not in given range");
            }
        }
        else{
            res.status(403).send("your origin is not in given range");
        }
    }
      
    
}
