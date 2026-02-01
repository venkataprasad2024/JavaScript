const express=require('express');
const path=require('path');
const app=express();
const {v4:uuid}=require('uuid');
uuid();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
let arr=[{
  id:uuid(),
  username:"venkataprasad",
  content:"1234"
},
{
  id:uuid(),
  username:"admin",
  content:"1234" 
}];
app.get('/posts',(req,res)=>{
  res.render('index.ejs',{arr});
})
const port=8080;
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})
// app.post('/login',(req,res)=>{
//   console.log(req.body);
//   res.send("login successful");
// })
app.get('/',(req,res)=>{
  res.render("login");
})

app.get('/posts/new',(req,res)=>{
  res.render("new");
});
app.get('/posts/:id',(req,res)=>{
  const {id}=req.params;
  const post=arr.find((p)=>id===p.id);
  res.render("show",{post});
})
app.post('/posts',(req,res)=>{
  res.redirect("/posts");
let {username,content}=req.body;
let newId=uuid();
  req.body.id=newId;
  arr.push(req.body);
})

app.patch('/posts/:id',(req,res)=>{
  let {id}=req.params;
    const post=arr.find((p)=>p.id===id);
  let newContent=req.body.content;
 post.content=newContent;
  console.log(post);
  res.send("Patch request working");
})

// app.get('/posts/:id/edit',(req,res)=>{
//   let {id}=req.params;
  
//   res.redirect('/posts');
// });