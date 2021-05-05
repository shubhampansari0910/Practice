const mongoose = module.exports= require('mongoose');
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true })
.then(()=>{
    console.log("connected to mongoDb")
})
.catch(()=>{
    console.error("mongo not connnected");
})
const courseSchema = new mongoose.Schema({
    code: {
        type:String,
        required:true,
        minlength:5,
        maxlength:255
    },
    amount: Number,
    //tags:[String],
    CreatedAt:{type:Date,default:Date.now},
    minValue:{type:Number,default:0},
    ExpiryDate:{type:Date,default:Date.now},
    isActive: { type: Boolean, require: true, default: true }

})

const Course = mongoose.model('promocodes',courseSchema);

module.exports = Course;


