const express=require ("express");
const app = express();
const bodyParser = require ("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.send("welcome to my page")
});

app.get("/about", function(req,res){
    res.send("hello my name is zubair")
});

app.get("/calculator",function(req,res){
    res.sendFile(__dirname+"/index.html")
});

app.post("/calculator",function(req,res){

    console.log(req.body);

    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);

    let sum=n1+n2;
    res.send("sum is :"+sum)
});

app.listen(5000, function(req,res){
    console.log("server is running on port 5000");
});

