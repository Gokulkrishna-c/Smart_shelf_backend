const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
var output = ""
const bodyparser = require("body-parser")
const exphbs  = require("express-handlebars")
const hbs = exphbs.create({
  extname:'.hbs',
})
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.get("/",(req,res)=>{
    res.send("hello wprdas as")
})
app.get("/weights",(req,res)=>{
 
})
app.post("/weight",(req,res)=>{
    const weight = req.body.weight;
  console.log(weight);
    // res.send(weight)
     res.render("output",{weight:weight});
})
app.listen(port,()=>{
    console.log(`app running  in ${port}`);
})
