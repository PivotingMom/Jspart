/* // console.log('Hello world');

//  var userAge = 18;
//  var is_subscribed = true;



// if(userAge < 18 && (!is_subscribed)){console.log("the user is younger than 18 and not subscribed"); }else if(userAge >= 18 && (!is_subscribed)){console.log("the user is  18 or older and not subscribed");
// }else if (userAge < 18 && is_subscribed){console.log("the user is younger than 18 and is subscribed");
// }else if(userAge >= 18 && is_subscribed){console.log("the user is 18 or older and is subscribed");} 

//solution to the first part of assignment -10 tweets 


 var tweets = [
  "TGIF","Spring-2022", "Spring break begins", "friyay", "family weekend", "spring-sale", "end of season sale", "pray for Ukraine", "hackathon loading", "Break the Bias"];

  for (var i = 0; i < tweets. length; i++) {
console.log(tweets[i]);
} 

/* 
console.log(typeof tweets);
console.log(typeof tweets[0]);
console.log(tweets[1]);
console.log(tweets[2]);
console.log(tweets[3]);
console.log(tweets[4]);
console.log(tweets[5]);
console.log(tweets[6]);
console.log(tweets[7]);
console.log(tweets[8]);
console.log(tweets[9]); */



  //solution to bonus 
  
//objects are collection of properties e.g spring, keyof functions helps to the know the type of object
/* 
  var userName = [
    "@jola", "@tina", "@dipo", "@paris", "@george", "@dan", "@yinka", "@esther", "@liz", "@israel"];
    console.log(typeof userName[1]);

    

  var doc = [
    "01-03-2022", "02-03-2022", "03-03-2022", "04-03-2022", "05-03-2022", "06-03-2022", "07-03-2022", "08-03-2022", "09-03-2022", "10-03-2022"];
    console.log(typeof doc[1]);

  var userAge = [
    "16", "16", "16", "16", "16", "16", "16", "16", "16", "16",]
    console.log(typeof userAge[1]);
  
    var twitterPost = {};
    console.log(twitterPost); */

//objects are collection of properties 


//var twitterPost = {
//   tweets :"TGIF",
//   userName : "@jola",
//   doc : "01-03-2022",
//   userAge : "16",
// };
// console.log(twitterPost);

 
//WK 9D 
/* var Obj = {
  result: 0,
  addNumber: function(a, b) {
    this.result = a + b;
    return this;
  },

  multiplyNumber: function(a) {
    this.result = this.result * a;
    return this;
  },}
  Obj.addNumber(5, 2).multiplyNumber(5)

  console.log(Obj.addNumber(5, 2).multiplyNumber(5));



let sentence = "How are you today?";

console.log(sentence.startsWith('ph'));

console.log(sentence.length > 10);


//wk9e

var twitterPost = {
  tweets :"TGIF",
  userName : "@jola",
  created_at : "01-03-2022",
  age : "16",
}; */

function userTweets(tweets = [
  "TGIF","Spring-2022", "Spring break begins", "friyay", "family weekend", "spring-sale", "end of season sale", "pray for Ukraine", "hackathon loading", "Break the Bias"]) {
  console.log(tweets)
}

userTweets();

var userTweets = {
  tweets :"TGIF",
  userName : "@jola",
  created_at : "01-03-2022",
  age : "16",
}; 
console.log(userTweets.age >= 18);

const age = [
    "16", "16", "18", "17", "19", "16", "18", "16", "17", "18"];

   const filtered = age.filter(function(value) {
      return value >= 18;});

    console.log(filtered);