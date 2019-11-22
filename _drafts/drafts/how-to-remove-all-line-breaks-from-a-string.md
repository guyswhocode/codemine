---
title: How to remove all line breaks from a string 
categories: ["programming"] 
tags: ["JS"]
---
     The easiest approach is using regular expressions to detect and replace newlines in the string. In this case, we use replace function along with string to replace with, which in our case is an empty string.
     ```javascript
     function remove_linebreaks( var message ) {
         return message.replace( /[\r\n]+/gm, "" );
     }
     ```
     In the above expression, g and m are for global and multiline flags.

     **[⬆ Back to Top](#table-of-contents)**
     
