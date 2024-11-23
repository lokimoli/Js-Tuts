// For loops
// let sum = 0
// n  = Number.parseInt(n)
// let n = prompt("Enter the range of number")
// for (let n = 0; 0<n; n++){
//     sum += n+1
// }

// console.log(n)

// // while loops

// let a = prompt ("Enter the value of n ")
// n = Number.parseInt(n)

// let i = 0
// while(i<n){
//     console.log(i)
//     i++;
// }

// Do while Loops

let n = prompt ("Enter the value of n ", "0")  
// output gives 0 in the space for number
n = Number.parseInt(n)

let deletePost = confirm("Do you really want to delete this post?")

if(deletePost){
    console.log("Your post has been deleted successfully");
    
}

else{
    console.log("Your post has not been deleted");
    
}
console.log(deletePost);


let i = 0
do{
    console.log(n);
    i++;
}while (i< n)

