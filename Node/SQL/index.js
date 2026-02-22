// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'db1',
//   password: 'Prasad@123'
// });

// connection.query('SHOW TABLES', (err, result) => {
//   if (err) {
//     console.error("Error:", err);
//   } else {
//     console.log(result);
//   }
// });

// console.log("Before API");

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then(res => res.json())
//   .then(data => console.log(data));

// console.log("After API");


async function getApi(){
 try{ const res=await fetch("https://dog.ceo/api/breeds/image/random");
  const data=await res.json();
  console.log(data);}
  catch(err){
    console.log("Error:",err);
  }
}
getApi();