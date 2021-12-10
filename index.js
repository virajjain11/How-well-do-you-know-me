var readlineSync = require('readline-sync');
var score = 0;
if(readlineSync.keyInYN("Eyii Bolimagaa, Nik yan yerr gotunda? say yes or no")){
userQuestion();
console.log("Ok byee....elle tikkla nik unduu");
}
else{
  console.log("Gotujji athaa.....");
  console.log("Gotujji atha BVC.....");
  console.log("ippadh...malleji");
  console.log("Nanora bala....Kalpave nik");
}

function userQuestion(){
var userAns =  readlineSync.question("Enna birthday Date panya naii: ");
if(userAns=="27"){
  correctAns();
}
else{
 wrongAns();
}
var userAns =  readlineSync.question("Enna birthday month panya Bosudii: ");
if(userAns==="09"|| userAns === "9" || userAns=== "september"){
  correctAns();
}
else{
   console.log("Avla gotujja nik....boka dada gotundu nik sante");
 wrongAns();
}
var userAns =  readlineSync.question("Ninna pudar pan: ");
console.log( userAns + " malla bvc ge....hehe...Thank you for wasting your time")
}

function currentScore(val){
  score = score+val;
    console.log("Ninna score "+ score);
  console.log("-------------------")
}
function correctAns(){
  console.log("Sabaash bete!..Nik onji point");
  currentScore(1);
}
function wrongAns(){
   console.log("Saila eee");
  currentScore(-1);
}