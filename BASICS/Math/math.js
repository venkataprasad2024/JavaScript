let max=prompt("Enter a maximum number:");
let answer=Math.floor(Math.random()*max+1);
let guess=prompt("Enter your guess");
while(true){
  if(guess==answer){
    alert("You Win!");
    break;
  }
  else if(guess<answer){
    alert("Too low! Try again.");
    guess=prompt("Enter your guess");
  }
  else{
    alert("Too high! Try again.");
    guess=prompt("Enter your guess");
  }
}