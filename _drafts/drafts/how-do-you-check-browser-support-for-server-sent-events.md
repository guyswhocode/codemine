---
title: How do you check browser support for server-sent events 
categories: ["programming"] 
tags: ["JS"]
---
    You can perform browser support for server-sent events before using it as below,
    ```javascript
    if(typeof(EventSource) !== "undefined") {
      // Server-sent events supported. Let's have some code here!
    } else {
      // No server-sent events supported
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

