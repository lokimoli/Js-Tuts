 const hello = () => {
    console.log("Hey there!")
    return "hi"
 }
 
//  function onePlusAvg(x,y){
//     return Math.round(1+(x+y)/2)
//  }

//  let a = 1;
//  let b = 2;
//  let c = 3;
//  hello();

//  console.log("One plus average of a and b is ", onePlusAvg(a,b));
//  console.log("One plus average of b and c is ", onePlusAvg(b,c));
//  console.log("One plus average of c and a is ", onePlusAvg(a,c));

/*
 function greet(name,greetText){
         //  console.log(greetText + " " + name);
          console.log(greetText + " " + name + " is a good boy")
 }

 let greetText = "Good morning"
 let name = "Shaurya";
 let name1 = "Yug";
 let name2 = "Harsh;it"
 let name3 = "Sam"
 let name4 = "virru"

 greet(name , greetText);
 greet(name1 , greetText);
 greet(name2 , greetText);
 greet(name3 , greetText);
 greet(name4 , greetText);

// The variable which is defined first should also come first in the function or else the output will show "Not defined"

 console.log(name + "is a good boy");
 console.log(name + "is a good boy");
 console.log(name + "is a good boy");
 console.log(name + "is a good boy");
 console.log(name + "is a good boy");


 function sum(a,b,c){
          let d = a-b-c;
          return d;
 }

 let value = sum(214214,34135,3523)
 console.log(value);
*/

 function average(a,b,c){
   let d = (a+b+c)/3
   return d;
   // Anything written after return is printed 
 }

 let avg = average(10,20,30);
 console.log(avg);

 let i = 0;
 while (i<10) {
      console.log(`${i} is less than 10`);
      i++;
 }

 let names = ["Array" , "objects" , "Sam" , "Jeet" , "Ashwani" , "Kalpit"];

 for(element of names){
  console.log(" Hello BSDK " + element + " to Javascript ");
  
 }

 let object = {
   identity:  "Shaurya",
   location: "Thatipur",
   DOB:"November" 
 }

 for (const key in object) {
    console.log(`The wanted info that is ${key} is $[object{key}]`); 
  }