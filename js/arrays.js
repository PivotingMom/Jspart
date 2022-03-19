// since the lenght of our variables have to be thesame , so we will only initiate an integer and try to play around with other figures. 

var ages = ["19"];
var is_subscribed = true; 

// I think to run this kind of code that involves a boolean and an integer as variable , we have to either use the either while or do while method of looping,  I opt for the latter 
console.log(ages); // I ran this to first test that everything is working as it should

let i = ages  

// this means that for as long as i, the age of the user is less than 18 (18 being the condition counter), var bool is false then console prints "the user is younger than 18 and not subscribed"); And that's the principle that applies to line 14 to 17.
while (i < 18 && (!is_subscribed)){
  console.log ("the user is younger than 18 and not subscribed");
} if(i >= 18 && (!is_subscribed)){console.log("the user is  18 or older and not subscribed");}
else if (i < 18 && is_subscribed){console.log("the user is younger than 18 and is subscribed");
}else if(i >= 18 && is_subscribed){console.log("the user is 18 or older and is subscribed");} 
