const ex = require("express");
const db=require("./src/db");
const PORT = process.env.PORT || 2020;
const app = ex();


app.use(ex.static("./public"));

app.get("/",(req, res) => {
  console.log(`Server is created `);
  res.render("home.ejs");
});

app.get('/customers',(req,res)=>{
    res.render("customers.ejs");
})

app.get('/about',(req,res)=>{
  res.render("about.ejs");
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
