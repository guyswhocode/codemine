---
title: What are events 
categories: ["programming"] 
tags: ["JS"]
---
     Events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can `react` on these events. Some of the examples of HTML events are,

     1. Web page has finished loading
     2. Input field was changed
     3. Button was clicked

     Let's describe the behavior of click event for button element,

     ```javascript
     <!doctype html>
     <html>
      <head>
        <script>
          function greeting() {
            alert('Hello! Good morning');
          }
        </script>
      </head>
      <body>
        <button type="button" onclick="greeting()">Click me</button>
      </body>
     </html>
     ```

     **[⬆ Back to Top](#table-of-contents)**

