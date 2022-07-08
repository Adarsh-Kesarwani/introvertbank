const moongoose = require("moongoose");
const DB ="mongodb+srv://Adarsh:Adarsh@cluster0.8db2x9n.mongodb.net/?retryWrites=true&w=majority";


// moongoose.connect(DB,{}).then(()=>{
// console.log(`Server connected `);
// }).catch(()=>{
// console.log(`not connected`);
// })
//        useNewParser:true,
// useCreateIndex:true,
// useUnifiedTopology:true,
// useFindAndModify:false

const middleware = (req, res, next) => {
    console.log(`Hello my middleware `);
    moongoose
      .connect(DB, {})
      .then(() => {
        console.log(`Server connected `);
      })
      .catch(() => {
        console.log(`not connected`);
      });
    next();
  };