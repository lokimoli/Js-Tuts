 const hello = () => {
    console.log("Hey there!")
    return "hi"
 }
 
 function onePlusAvg(x,y){
    return Math.round(1+(x+y)/2)
 }

 let a = 1;
 let b = 2;
 let c = 3;
 hello();

 console.log("One plus average of a and b is ", onePlusAvg(a,b));
 console.log("One plus average of b and c is ", onePlusAvg(b,c));
 console.log("One plus average of c and a is ", onePlusAvg(a,c));