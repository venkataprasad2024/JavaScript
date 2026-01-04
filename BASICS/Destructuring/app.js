let names=["Prasad","Raghava","Kiran","Srinivas"];
let [winnner,runner,...others]=names;
console.log(winnner);
console.log(runner);
console.log(others);

//objects destructuring
const person={
  name:"Prasad",
  age:24,
  city:"Kandukur"

};

let{name:Nam,age:AG,city:CT}=person;
console.log(Nam);
console.log(AG);
console.log(CT);