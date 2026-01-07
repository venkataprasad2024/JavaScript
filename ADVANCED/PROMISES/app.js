function saveTdb(data,delay){
  return new Promise((resolve,reject)=>{
    let guess=Math.floor(Math.random()*10)+1;
    setTimeout(()=>{
      if(guess<5){
        resolve("Data saved successfully");
      }else{
        reject("Failed to save data");
      }
    },delay);
  });
}
async function execute() {
  try {
    const result = await saveTdb({ task: "Learn Promises" }, 4000);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

execute();
