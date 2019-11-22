---
title: How do you combine two or more arrays 
categories: ["programming"] 
tags: ["JS"]
---
     The concat() method is used to join two or more arrays by returning a new array containing all the elements. The syntax would be as below,
     ```javascript
     array1.concat(array2, array3, ..., arrayX)
     ```
     Let's take an example of array's concatenation with veggies and fruits arrays,
     ```javascript
       var veggies = ["Tomato", "Carrot", "Cabbage"];
       var fruits = ["Apple", "Orange", "Pears"];
       var veggiesAndFruits = veggies.concat(fruits);
       console.log(veggiesAndFruits); // Tomato, Carrot, Cabbage, Apple, Orange, Pears
     ```

     **[⬆ Back to Top](#table-of-contents)**

