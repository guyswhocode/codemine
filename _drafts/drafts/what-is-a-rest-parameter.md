---
title: What is a rest parameter 
categories: ["programming"] 
tags: ["JS"]
---
     Rest parameter is an improved way to handle function parameter which allows us to represent an indefinite number of arguments as an array. The syntax would be as below,
     ```javascript
     function f(a, b, ...theArgs) {
       // ...
     }
     ```
     For example, let's take a sum example to calculate on dynamic number of parameters,
     ```javascript
     function total(…args){
     let sum = 0;
     for(let i of args){
     sum+=i;
     }
     return sum;
     }
     console.log(fun(1,2)); //3
     console.log(fun(1,2,3)); //6
     console.log(fun(1,2,3,4)); //13
     console.log(fun(1,2,3,4,5)); //15
     ```
     **Note:** Rest parameter is added in ES2015 or ES6

     **[⬆ Back to Top](#table-of-contents)**

