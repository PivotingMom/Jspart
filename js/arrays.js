
var ages = ["18"];
var is_subscribed = true;
console.log(ages);

let i = ages

while (i < 18 && (!is_subscribed)){
  console.log ("the user is younger than 18 and not subscribed");
} 

while (i >= 18 && (!is_subscribed)){console.log("the user is  18 or older and not subscribed");}

while (i < 18 && is_subscribed){console.log("the user is younger than 18 and is subscribed");
}

while (i >= 18 && is_subscribed){console.log("the user is 18 or older and is subscribed");} 

