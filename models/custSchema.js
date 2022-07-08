const mongoose=require(mongoose);
      customer=new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        acnNum:{
            type:Number,
            required:true
        },
        bal:{
            type:double,
            required:true
        }
      })

const Customers=mongoose.model("Customres",customer);

module.exports=Customers;