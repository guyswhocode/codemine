---
title: How do you receive server-sent event notifications 
categories: ["programming"] 
tags: ["JS"]
---
    The EventSource object is used to receive server-sent event notifications. For example, you can receive messages from server as below,
    ```javascript
    if(typeof(EventSource) !== "undefined") {
      var source = new EventSource("sse_generator.js");
      source.onmessage = function(event) {
        document.getElementById("output").innerHTML += event.data + "<br>";
      };
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

