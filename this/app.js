const student={
    name:"Venkataprasad",
    age:22,
    eng:90,
    math:98,
    hindi:85,
    getAvg(){
      console.log((this.eng+this.math+this.hindi)/3);

      console.log(this);
    },
    getAge:()=>{
console.log(this);
    },
    getName:function(){
      console.log(this);
  getAll=()=>{
              console.log(this);
      }
      return getAll();
    }
    
}
student.getAvg();
student.getAge();
student.getName();


 
 