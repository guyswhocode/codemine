---
title: What is the output of below function calls 
categories: ["programming"] 
tags: ["JS"]
---
     **Code snippet:**
     const circle = {
       radius: 20,
       diameter() {
         return this.radius * 2;
       },
       perimeter: () => 2 * Math.PI * this.radius
     };

     console.log(circle.diameter());
     console.log(circle.perimeter());

     **Output:**

     The output is 44 and NaN. Remember that diameter is a regular function, whereas the value of perimeter is an arrow function. The this keyword of a regular function(i.e, diameter) refers to surrounding scope which is a class(i.e, Shape object). Whereas this keyword of perimeter function refers the surrounding scope which is window object. Since there is no radius property on window object it returns an undefined value and the multiple of number value returns NaN value.

     **[⬆ Back to Top](#table-of-contents)**

