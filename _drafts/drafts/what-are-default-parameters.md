---
title: What are default parameters 
categories: ["programming"] 
tags: ["JS"]
---
     In E5, we need to depends on logical OR operator to handle default values of function parameters. Whereas in ES6, Default function parameters feature allows parameters to be initialized with default values if no value or undefined is passed. Let's compare the behavior with an examples,
     ```javascript
     //ES5
     var calculateArea = function(height, width) {
        height =  height || 50;
        width = width || 60;

        return width * height;
     }
     console.log(calculateArea()); //300
     ```
     The default parameters makes the initialization more simpler,
     ```javascript
     //ES6
     var calculateArea = function(height = 50, width = 60) {
        return width * height;
     }

     console.log(calculateArea()); //300
     ```

     **[⬆ Back to Top](#table-of-contents)**

