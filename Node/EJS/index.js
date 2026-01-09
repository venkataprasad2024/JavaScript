const express = require("express");
const path = require("path");

const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(express.static("public/css"));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

app.get("/",(req,res)=>{
  res.render("home");
})
app.get("/dice",(req,res)=>{
  let dicenum=Math.floor(Math.random()*6)+1;
  res.render("rolldice.ejs",{dicenum});
});

app.get("/ig/:username",(req,res)=>{
  const instadata=require("./data.json");
  let {username}=req.params;
  
const data=instadata[username];

  res.render("instagram.ejs",{data});
})

app.get("/about",(req,res)=>{
  res.send("<h1>This is about page</h1>");
})