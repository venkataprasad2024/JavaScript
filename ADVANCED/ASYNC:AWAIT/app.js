function demo(colour,delay){

  setTimeout(()=>{
    resolve("Demo function executed");
  },delay)

}

async function demo(colour, delay){
  console.log("Demo function started with colour ",colour);
}
