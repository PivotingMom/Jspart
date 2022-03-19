console.log('Hello world');

 var userAge = 18;
 var is_subscribed = true;



if(userAge < 18 && (!is_subscribed)){console.log("the user is younger than 18 and not subscribed"); }else if(userAge >= 18 && (!is_subscribed)){console.log("the user is  18 or older and not subscribed");
}else if (userAge < 18 && is_subscribed){console.log("the user is younger than 18 and is subscribed");
}else if(userAge >= 18 && is_subscribed){console.log("the user is 18 or older and is subscribed");} 


