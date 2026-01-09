 const express =require("express");
 let app=express();
 let port=3000;
 app.listen(port,()=>{
console.log("port running on ",port)
 })
 

app.get("/",(req,res)=>{
  res.send("<h1>Hello from express ROOT server</h1>");
})
// app.get("/about",(req,res)=>{
//   res.send("<h1>Hello from express ABOUT server</h1>");
// })
// app.get("/contact",(req,res)=>{
//   res.send("<h1>Hello from express CONTACT server</h1>");
// })
// app.use((req,res)=>{
//   res.send("<h1>Page not Found</h1>");
// })

app.get("/:username/:id",(req,res)=>{
  let{username,id}=req.params;
  res.send(`<h1>Hello ${username} your ID is ${id}</h1>`);
})

app.get("/search",(req,res)=>{
  let{q}=req.query;
  console.log(q);
  if(!q){
    return res.send("<h1>Please provide search query</h1>");
  }
  res.send(`<h1>Search Query: ${q}</h1>`);
})