---
title: What is the use of preventDefault method 
categories: ["programming"] 
tags: ["JS"]
---
     The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyper link are some common usecases.
     ```javascript
     document.getElementById("link").addEventListener("click", function(event){
      event.preventDefault();
     });
     ```
     **Note:** Remember that not all events are cancelable.

     **[⬆ Back to Top](#table-of-contents)**

