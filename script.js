var number = prompt("Pick a number");
var int = parseInt(number);
var sum = 0;


for(i=0; i <= int; i++){
	sum = sum + i;
};
   console.log(sum);





var input = prompt('Do you want to play a game');
var word;
var words = ""

if(input==="yes"){

do{
  var word = prompt('Pick a word')
  var words = words.concat(word," ")
 var input = prompt('Do you want to play again?')
  }while(input === 'yes');
}
    console.log(words);






var input = prompt("Would you like to print your name?");

if (input==="yes"){
var name = prompt("What is your name?")
}

var message = "Hi my name is " + name;

while(input === "yes"){
console.log(message)
 var input = prompt("Would you like to print this again?")
 message = message + "!"
 }; 






var input=prompt("what time of the day is it?");
if(input==="morning"){
    console.log("Since its morning you should be eating breakfast. We suggest eggs and toast!");
}
else if(input==="noon"){
    console.log("Since its noon you should be eating lunch. We suggest a yummy green salad!");
}
else if(input==="evening"){
    console.log("Since its evening you should be eating dinner. We suggest chicken and rice!");
}
else{
    console.log("try again");
}


