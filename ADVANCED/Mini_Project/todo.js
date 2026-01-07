let btn=document.getElementById("Btn");
let ul=document.getElementById("taskList");
let input=document.getElementById("taskInput");

btn.addEventListener("click",function(){
  let item=document.createElement("li");
  let deltbtn=document.createElement("button");
  deltbtn.textContent="Delete";

  item.textContent=input.value;
    item.appendChild(deltbtn);
  ul.appendChild(item);
    console.log(input.value);
    input.value="";
})

