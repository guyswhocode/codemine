---
title: What are the DOM methods available for constraint validation 
categories: ["programming"] 
tags: ["JS"]
---
     The below DOM methods are available for constraint validation on an invalid input,
     1. checkValidity(): It returns true if an input element contains valid data.
     2. setCustomValidity(): It is used to set the validationMessage property of an input element.
     Let's take an user login form with DOM validations
     ```javascript
     function myFunction() {
       var userName = document.getElementById("uname");
       if (!userName.checkValidity()) {
         document.getElementById("message").innerHTML = userName.validationMessage;
       } else {
         document.getElementById("message").innerHTML = "Entered a valid username";
       }
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

