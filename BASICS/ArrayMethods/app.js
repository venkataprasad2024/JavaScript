let arr= [1,2,3,4,5,6,7];
let doubleArr=arr.map((el)=>{
  return el*2;
})
console.log(doubleArr);

let filtered =arr.filter((el)=>{
  return el%2!=0;
})
console.log(filtered);
arr.forEach(el => console.log(el));


arr.some(el=>{console.log(el%2==0)});