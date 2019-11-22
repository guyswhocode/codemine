---
title: How do you decode an URL 
categories: ["programming"] 
tags: ["JS"]
---
     The decodeURI() function is used to decode a Uniform Resource Identifier (URI) previously created by encodeURI().
     ```javascript
      var uri = 'https://mozilla.org/?x=шеллы';
      var encoded = encodeURI(uri);
      console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
     try {
       console.log(decodeURI(encoded)); // "https://mozilla.org/?x=шеллы"
     } catch(e) { // catches a malformed URI
       console.error(e);
     }
     ```

     **[⬆ Back to Top](#table-of-contents)**

