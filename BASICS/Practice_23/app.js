let arr= [1,2,3,4,5,6,7,8,9];
const sum =(arr)=>{
let total =0;
for(let i=0;i<arr.length;i++){
  total=total+arr[i];

}let avg =total/arr.length;
console.log(avg);
}
sum(arr);