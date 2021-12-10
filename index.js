var readlineSync = require('readline-sync');
var score = 0;
if(readlineSync.keyInYN("Heyy buddy..Do you know me?")){
userQuestion();
console.log("Ok byee");
}
else{
  console.log("Then, Why are you still alive?.....");
 
}

function userQuestion(){
var userAns =  readlineSync.question("what's my birthday Date: ");
if(userAns=="27"){
  correctAns();
}
else{
 wrongAns();
}
var userAns =  readlineSync.question("What's my birthday month: ");
if(userAns==="09"|| userAns === "9" || userAns=== "september"){
  correctAns();
}
else{
   console.log("Are you really my friend..?");
 wrongAns();
}
var userAns =  readlineSync.question("what's your name: ");
console.log(" Dear " + userAns + " Thank you for wasting your time....will meet you next time....soooon")
}

function currentScore(val){
  score = score+val;
    console.log("Your score is "+ score);
  console.log("-------------------");
}
function correctAns(){
  console.log("Yayyy!....That's a right answer");
  currentScore(1);
}
function wrongAns(){
   console.log("Uhohh!...better luck next time");
  currentScore(-1);
}